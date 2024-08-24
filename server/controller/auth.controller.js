/* const { validationResult } = require("express-validator"); */
const { User } = require("../database/models");

const bcrypt = require("bcryptjs");

class AuthController {
  async registration(req, res) {
    try {
      /* const errors = validationResult(req);
      if (!errors.isEmpty) {
        return res
          .status(400)
          .json({ message: "Ошибка при регистрации", errors });
      } */
      const { userName, password } = req.body;

      const candidate = await User.findOne({ where: { userName } });

      if (candidate) {
        return res
          .status(400)
          .json({ message: "Пользователь с таким именем уже существует" });
      }

      const salt = bcrypt.genSaltSync(7);
      const hashPassword = bcrypt.hashSync(password, salt);

      await User.create({
        userName,
        hashPassword,
      });

      return res.json({ message: `Пользователь успешно зарегистрирован ${hashPassword}` });
    } catch (error) {}
  }

  async login(req, res) {
    try {
      const { userName, password } = req.body;

      const findUser = await User.findOne({ where: { userName } });

      if (!findUser) {
        return res
          .status(400)
          .json({ message: "Пользователь с таким именем не найден" });
      }

      const validatePassword = bcrypt.compareSync(password, findUser.password);

      if (!validatePassword) {
        return res.status(400).json({ message: "Неверный пароль" });
      }

      return res.json(findUser);
    } catch (error) {
      res.status(500).json({
        message: error,
      });
    }
  }
}

module.exports = new AuthController();

const { User } = require("../database/models");

const bcrypt = require("bcryptjs");

class AuthController {
  async registration(req, res) {
    try {
      const { userName, password } = req.body;

      const candidate = await User.findOne({ where: { userName } });

      if (candidate) {
        return res.status(400).json({ message: "Пользователь с таким именем уже существует" });
      }

      const hashPassword = bcrypt.hashSync(password, 7);

      await User.create({
        userName,
        hashPassword,
      });

      return res.json({ message: "Пользователь успешно зарегистрирован" });
      
    } catch (error) {}
  }

  async login(req, res) {
    try {
      const allUsers = await User.findAndCountAll({
        order: [["createDate", "DESC"]],
      });

      return res.json(allUsers);
    } catch (error) {
      res.status(500).json({
        message: error,
      });
    }
  }
}

module.exports = new AuthController();

const { NewsArt } = require("../database/models");

class NewsArtController {
  async create(req, res) {
    try {
      const { title, bodyText, imagePath } = req.body;

      if (!title || !bodyText || !imagePath) {
        return res
          .status(404)
          .json({ message: "Не переданы все обязательные параметры" });
      }

      await NewsArt.create({
        title,
        bodyText,
        imagePath,
      });

      return res.json({ message: "success" });
    } catch (error) {}
  }
}

module.exports = new NewsArtController();

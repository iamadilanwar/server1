const Card = require("../Models/Card.model");
module.exports = {
  create: async (req, res, next) => {
    try {
      const result = req.body;
      const card = new Card(result);
      const savedCard = await card.save();
      res.send(savedCard);
    } catch (error) {
      next(error);
    }
  },
  list: async (req, res, next) => {
    try {
      const result = await Card.find();
      res.send(result);
    } catch (error) {
      next(error);
    }
  },

  single: async (req, res, next) => {
    try {
      const result = await Card.findById({ _id: req.params.id });
      res.send(result);
    } catch (error) {
      next(error);
    }
  },
  update: async (req, res, next) => {
    try {
      const result = await Card.findOneAndUpdate(
        { _id: req.params.id },
        {
          $set: req.body,
        },
        { new: true }
      );
      res.send(result);
    } catch (error) {
      next(error);
    }
  },
  delete: async (req, res, next) => {
    try {
      const result = await Card.findOneAndRemove({ _id: req.params.id });
      res.send(result);
    } catch (error) {
      next(error);
    }
  },

  allSubCards: async (req, res, next) => {
    try {
      console.log(req.params.key !== undefined ? req.params.key : "undefined");
      const result = await Card.find(
        req.params.key !== undefined
          ? {
              $or: [
                { "cardData.title": { $regex: req.params.key, $options: "i" } },
                { "cardData.year": { $regex: req.params.key, $options: "i" } },
                { "cardData.board": { $regex: req.params.key, $options: "i" } },
              ],
            }
          : {},
        {
          cardData: 1,
        }
      );
      res.status(200).json({ total: result.length, result });
      res.send(result);
    } catch (error) {
      console.log(error);
    }
  },
};

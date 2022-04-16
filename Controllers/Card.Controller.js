const {Card, SubCard} = require("../Models/Card.model");
// const SubCard = require("../Models/Card.model");
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
      console.log(result)
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
      const result = await Card.find(
        req.params.key != undefined
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
      var cardsList = [];
      for (var i = 0; i < result.length; i++) {
        var cardObj = {};
        cardObj = result[i].cardData;
        if (cardObj.length != 0) {
          cardsList.push(...cardObj);
        }
      }
      console.log(result)
      res.status(200).json({ total: cardsList.length, cardsList });
      res.send(result);
    } catch (error) {
      console.log(error);
    }
  },
};

const Fact = require("../Models/Fact.model");
module.exports = {
  create: async (req, res, next) => {
    try {
      const fact = new Fact(req.body);
      console.log(fact)
      const savedFact = await fact.save();
      res.send(savedFact);
    } catch (error) {
      next(error);
    }
  },
  list: async (req, res, next) => {
    try {
      const result = await Fact.find();
      res.send(result);
    } catch (error) {
      next(error);
    }
  },
  single: async (req, res, next) => {
    try {
      const result = await Fact.findOne({ _id: req.params.id });
      res.send(result);
    } catch (error) {
      next(error);
    }
  },
  update: async (req, res, next) => {
    try {
      const result = await Fact.findOneAndUpdate(
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
      const result = await Fact.findOneAndRemove({ _id: req.params.id });
      res.send(result);
    } catch (error) {
      next(error);
    }
  },
};

const TodayHistory = require("../Models/History.model");
module.exports = {
  create: async (req, res) => {
    try {
      console.log("reqwbdiwhebwejbwejbfewbfkebfewjfbejfbbfe")
      // console.log(req.body);
      const addHistory = TodayHistory(req.body);
      let history = await addHistory.save();
      res.send(history);
    } catch (error) {
      console.log("whbfhiwevhwevhwe")
      console.log(error)
    }
  },
  list: async (req, res, next) => {
    try {
      const { page = 1, limit = 10 } = req.query;
      const result = await TodayHistory.find()
        .limit(limit * 1)
        .skip(limit * (page - 1));
      res.status(200).json({ total: result.length, result });
    } catch (error) {
      next(error);
    }
  },
  single: async (req, res, next) => {
    try {
      const result = await TodayHistory.findOne({ _id: req.params.id });
      res.send(result);
    } catch (error) {
      next(error);
    }
  },
  update: async (req, res, next) => {
    try {
      const result = await TodayHistory.findOneAndUpdate(
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
      const result = await TodayHistory.findOneAndRemove({
        _id: req.params.id,
      });
      res.send(result);
    } catch (error) {
      next(error);
    }
  },
};

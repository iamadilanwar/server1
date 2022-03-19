const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HistoryData = new Schema({
  id: {
    type:  mongoose.Types.ObjectId,
  },
  title: {
    type: String,
  },
  date: {
    type: String,
  },
  imageURL: {
    type: String,
  },
  discription: {
    type: String,
  },
  tags: {
    type: String,
  },
  historyType: {
    type: String,
  },
}, {
  timestamps: true,
})
//---- history 
const HistorySchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    historyData: [HistoryData]
  },
  {
    timestamps: true,
  }
);

const TodayHistory = mongoose.model("history", HistorySchema);
module.exports = TodayHistory;

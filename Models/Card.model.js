const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SubCardSchema = new Schema(
  {
    id: {
      type: mongoose.Types.ObjectId,
    },
    title: {
      type: String,
      required: true,
    },
    board: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    logoURL: {
      type: String,
    },
    imageURL: {
      type: String,
    },
    announcement: {
      type: String,
    },
    discription: {
      type: String,
    },
  },
  { timestamps: true }
);

const CardSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  cardData: [SubCardSchema],
  url: {
    type: String,
    required: true,
  },
  logoURL: {
    type: String,
    required: true,
  },
});

const Card = mongoose.model("card", CardSchema);
module.exports = Card;

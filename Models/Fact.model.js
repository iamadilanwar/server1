const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TodaysFactSchema = new Schema(
    {
      id: {
        type:  mongoose.Types.ObjectId,
      },
      title: {
        type: String,
      },
      fact: {
        type: String,
      },
      source: {
        type: String,
      },
      tags: {
        type: String,
      },
      location: {
        type: String,
      }
    },  {
        timestamps: true,
      });

const FactSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    fact: [TodaysFactSchema],
  },
  {
    timestamps: true,
  }
);

const Fact = mongoose.model("fact", FactSchema);
module.exports = Fact;
module.exports = TodaysFact;

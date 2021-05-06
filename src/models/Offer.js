const mongoose = require("mongoose");

const OfferSchema = new mongoose.Schema({
  title: { type: String, required: true },
  status: { type: String, required: true },
  value: { type: Number, required: true },
  won_time: { type: Date, required: true }
});

mongoose.model("Offer", OfferSchema);

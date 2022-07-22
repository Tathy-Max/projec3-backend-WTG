const { Schema, model, default: mongoose } = require("mongoose");

const tripSchema = new Schema({
  destination: { type: String, required: true, trim: true },
  category: {
    type: String,
    required: true,
    enum: ["Adventure", "Relax", "Night Life", "Culture", "Beach"],
  },
  description: { type: String, required: true, trim: true, maxlength: 200 },
  quantity: { type: String, required: true, min: 0 },
  unit_price: { type: String, required: true, min: 0 },
  trip_img: { type: String, required: true },
  date_created: { type: Date, default: Date.now },
});

const TripModel = model("Trip", tripSchema);

module.exports = TripModel;

const { Schema, model, default: mongoose } = require("mongoose");

const juiceSchema = new Schema({
  name: { type: String, required: true, trim: true },
  category: {
    type: String,
    required: true,
    enum: ["Performance", "Energy", "Detox", "Brain", "Skin"],
  },
  ingredients: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true, maxlength: 200 },
  quantity: { type: Number, required: true, min: 0 },
  unit_price: { type: Number, required: true, min: 0 },
  date_created: { type: Date, default: Date.now },
});

const JuiceModel = model("Juice", juiceSchema);

module.exports = JuiceModel;

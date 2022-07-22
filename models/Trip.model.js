const { Schema, model, default: mongoose } = require('mongoose');

const tripSchema = new Schema({
	destination: { type: String, required: true, trim: true },
	category: {
		type: String,
		required: true,
		enum: ['Adventure', 'Relax', 'Night Life', 'Culture', 'Beach'],
	},
	description: { type: String, required: true, trim: true, maxlength: 200 },
	quantity: { type: Number, required: true, min: 0 },
	unit_price: { type: Number, required: true, min: 0 },
	date_created: { type: Date, default: Date.now },
});

const TripModel = model('Trip', tripSchema);

module.exports = TripModel;

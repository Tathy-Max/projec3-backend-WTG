const { Schema, model, default: mongoose } = require('mongoose');

const orderSchema = new Schema({
	customerId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
	},
	trips: [
		{
			type: mongoose.Schema.Types.ObjectId, //FAZER O POPULATE AQUI!
			ref: 'Trip',
		},
	],
	orderTotal: { type: String, required: true },
	dateCreated: { type: Date, default: Date.now },
});

const OrderModel = model('Order', orderSchema);

module.exports = OrderModel;

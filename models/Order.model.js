const { Schema, model, default: mongoose } = require('mongoose');

const orderSchema = new Schema({
	customer_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
	},
	juices: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Juice',
		},
	],
	order_total: { type: Number, required: true, min: 0 },
	date_created: { type: Date, default: Date.now },
});

const OrderModel = model('Order', orderSchema);

module.exports = OrderModel;

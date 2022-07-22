const router = require('express').Router();
const bcrypt = require('bcrypt');
const TripModel = require('../models/Trip.model');
const OrderModel = require('../models/Order.model');

const generateToken = require('../config/jwt.config');
const isAuth = require('../middlewares/isAuth');
const attachCurrentUser = require('../middlewares/attachCurrentUser');
const isAdmin = require('../middlewares/isAdmin');

// CREATE ORDER
router.post('/new-order/:idUser', async (req, res) => {
	try {
		const { idUser } = req.params;
		const newOrder = await OrderModel.create({
			...req.body,
			customer_id: idUser,
			// order_total: req.body.quantity * req.body.unit_price,
		});

		// await UserModel.findByIdAndUpdate(idUser, {
		// 	$push: { orders: newOrder._id },
		// });

		return res.status(201).json(newOrder);
	} catch (error) {
		console.log(error);
		return res.status(500).json(error);
	}
});

// READ ALL ORDERS
router.get('/all-orders', async (req, res) => {
	try {
		const allOrders = await OrderModel.find();
		return res.status(200).json(allOrders);
	} catch (error) {
		console.error(error);
		return res.status(500).json(error);
	}
});

// READ ONE ORDER
router.get('/one-order/:id', async (req, res) => {
	try {
		const { id } = req.params;

		const oneOrder = await OrderModel.findOne({ _id: id });
		return res.status(200).json(oneOrder);
	} catch (error) {
		console.error(error);
		return res.status(500).json(error);
	}
});

// UPDATE ONE ORDER
router.patch('/edit-order/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const editOrder = await OrderModel.findOneAndUpdate(
			{ _id: id },
			{ ...req.body },
			{ new: true }
		);
		return res.status(200).json(editOrder);
	} catch (error) {
		console.error(error);
		return res.status(500).json(error);
	}
});

// DELETE ONE ORDER
router.delete('/delete-order/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const deleteOrder = await OrderModel.deleteOne({ _id: id });
		return res.status(200).json(deleteOrder);
	} catch (error) {
		console.error(error);
		return res.status(500).json(error);
	}
});

module.exports = router;

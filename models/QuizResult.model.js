const { Schema, model, default: mongoose } = require('mongoose');

const QuizResultSchema = new Schema({
	customer_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
	},
	// como guardar todos os quiz results de um user?
	results: [{ type: String }],
	date_created: { type: Date, default: Date.now },
});

const QuizResultModel = model('QuizResult', quizresultSchema);

module.exports = QuizResultModel;

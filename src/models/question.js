const mongoose = require('mongoose')

const queSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true,
        trim: true
    },
    optionA: {
        type: String,
        required: true,
        trim: true
    },
    optionB: {
        type: String,
        required: true,
        trim: true
    },
    optionC: {
        type: String,
        required: true,
        trim: true
    },
    optionD: {
        type: String,
        required: true,
        trim: true
    },
    correctAns: {
        type: String,
        required: true
    },
    answer: {
        type: String
    }
})

const Que = mongoose.model('Que', queSchema)

module.exports = Que
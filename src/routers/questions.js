const express = require('express')
const Que = require('../models/question')
const auth = require('../middleware/auth')
const router = new express.Router()

router.post("/questions", (req, res, next) => {
    const que = new Que({
        question: req.body.question,
        optionA: req.body.optionA,
        optionB: req.body.optionB,
        optionC: req.body.optionC,
        optionD: req.body.optionD,
        correctAns: req.body.correctAns,
        answer: req.body.answer
    });
    que.save().then(createdQue => {
        res.status(201).json({
            message: 'Post added!',
            que: {
                ...createdQue,
                id: createdQue._id
            }
        });
    });
});

// router.get("/answer", (req, res, next) => {
//     const postQuery = Que.find({});
//     postQuery.then((documents) => {
//         res.send(documents)
//     });
// })

router.get("/questions", (req, res, next) => {
    const postQuery = Que.find({});
    postQuery.then((documents) => {
        res.send(documents)
    });
});

module.exports = router
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://indeedQuizApp:indeedQuizApp@cluster0-k9jvm.mongodb.net/QuizAppAPI?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
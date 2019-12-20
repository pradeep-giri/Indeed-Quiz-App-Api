const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const queRouter = require('./routers/questions')

const app = express()
const port = process.env.PORT || 3000

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
});

app.use(express.json())
app.use(userRouter)
app.use(queRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
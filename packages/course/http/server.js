const express = require("express")
const cors = require("cors")
const {
    error
} = require("@e_learning/core")




const {
    HttpError
} = require("../../core")

const app = express()
app.use(cors())
app.use(express.json())
 

module.exports = app;

//Main Route
app.use("/", (req, res, next) => {
    res.send("Hello world")
})

app.use(errorHandle)

function errorHandle(err, req, res, next) {
    if (err instanceof error.HttpError) {
        res.status(err.statusCode).send({
            message: err.message,
            error: err.error,
        })
    } else {
        res.status(500).send({
            message: "Internal server error",
            error: err
        });
    }
}

module.exports = app;
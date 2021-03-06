require('dotenv').config()
const mongoose = require("mongoose")
const express = require("express")
const app = express()
const cors = require("cors")

const catsRouter = require("./routes/catsDictionary")

app.use(express.json())
app.use(cors())
app.use("/cats",catsRouter)

mongoose.connect(process.env.MONGO_URI,()=>console.log("connected"))

app.listen(3000)
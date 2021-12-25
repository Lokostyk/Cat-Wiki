const mongoose = require("mongoose")

const catSchema = new mongoose.Schema({
    breed: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    }
})

const Cat = mongoose.model("Cat",catSchema)

module.exports = Cat
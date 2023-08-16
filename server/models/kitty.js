const mongoose = require('mongoose');
const { Schema , model} = mongoose;

const kittySchema = new Schema ({
    name: {
        type: String,
        require: true,
        trim: true
    },
    breed: {
        type: String,
        require: true,
        trim: true
    },
    age: {
        type: Number,
        require: true,
    },
    gender: {
        type: String,
        require: true,
        
    },
    color: {
        type: String,
        required: true,
    },
    trauma: {
        type: String,

    },
    declawed: {
        type: Boolean,
        required: true
    }
})

const Kitty = mongoose.model("Kitty", kittySchema, "Kitty");

module.exports =  Kitty;
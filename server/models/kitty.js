const mongoose = require('mongoose');
const { Schema } = mongoose;

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
    truma: {
        type: String,

    },
    declawed: {
        type: Boolean,
        require: true
    }
})

const Kitty = mongoose.model("Kitty", kittySchema);

module.exports =  Kitty;
const mongoose = require('mongoose')
const { Schema } = mongoose;
const Kitty = require('./kitty');
const hoomanSchema = new Schema({

name: {
    type: String,
    required: true,
    trim: true,
},
phone_num: {
    type: String,
    required: true,
    trim: true
},
address: {
    type: String,
    required: true,
    trim: true
},
creditCard: {
    type: String,
    required: true,
    trim: true
},
username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minLength: 4
},
password: {
type: String,
required: true,
trim: true,
minLength: 8
},
ssn: {
    type: String,
    required: true,
    unique: true,
},
email: {
    type: String,
    require: true,
    unique: true
},
kitty: {
    type: Schema.Types.ObjectId,
    ref: "Kitty"
}




















})
const Hooman = mongoose.model("Hooman", hoomanSchema)

module.exports = Hooman;
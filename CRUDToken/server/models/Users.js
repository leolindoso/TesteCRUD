
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: String,
    name: String,
    email: String,
    password: String,
    isAdmin : Boolean
})
module.exports = mongoose.model('User',userSchema,'Users')
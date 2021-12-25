const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');


const userSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true}
})

userSchema.pre('save', async function(password){
    await bcrypt.hash(password, 10);
})

const User = mongoose.model('User', userSchema);

module.exports = User;
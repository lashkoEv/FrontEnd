const mongoose = require('mongoose');   

const userSchema = mongoose.Schema({
    email: String,
    password: String
});

const AuthModel = mongoose.model("Users", userSchema);

module.exports = {
    AuthModel
}
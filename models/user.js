const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/express-auth');

const userSchema = mongoose.Schema({
    username: String,
    password: String,
    password: String,
    age: Number
});

module.exports = mongoose.model("User", userSchema);

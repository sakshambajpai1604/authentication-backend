const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://sakshambajpai:1234@cluster0.p5yvn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

const userSchema = mongoose.Schema({
    username: String,
    password: String,
    password: String,
    age: Number
});

module.exports = mongoose.model("User", userSchema);
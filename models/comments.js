const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    name: {type: String, required: true},
    business: {type: String, required: true},
    phone: {type: Number, required: false},
    link: {type: String, required: true},
    aboutyou: {type: String, required: true}
})

module.exports = mongoose.model('Comment', commentSchema);
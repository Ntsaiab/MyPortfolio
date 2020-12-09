const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name: {type: String, required: true},
    link: {type: String, required: true},
    screenshot: {type: String, required: true},
    description: {type: String, required: true}
})

module.exports = mongoose.model('Project', projectSchema);
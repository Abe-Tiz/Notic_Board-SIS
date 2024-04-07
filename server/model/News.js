const mongoose = require('mongoose');

const newSchema = new mongoose.Schema({
    title: String,
    content: String,
    image:String,
    createdAt: {
        type: Date,
        default:Date.now
    }
})

const News = mongoose.model('News', newSchema);

module.exports = News;
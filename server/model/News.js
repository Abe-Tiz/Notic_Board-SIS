const mongoose = require('mongoose');

const newSchema = new mongoose.Schema({
    title: String,
    subTitle: String,
    content: String,
    image: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
    message: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",  
        },
    ],
    like: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user", 
        },
    ],
});

const News = mongoose.model('News', newSchema);

module.exports = News;
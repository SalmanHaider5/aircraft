import mongoose from 'mongoose';

const news = new mongoose.Schema({
    searchKeyword: {
        type: String,
        require: true
    },
    title: {
        type: String,
        unique: true,
        maxLength: 1024
    },
    content: {
        type: String,
        maxLength: 1024
    },
    url: {
        type: String,
        maxLength: 1024
    },
    description: {
        type: String,
        maxLength: 1024
    },
    category: {
        type: String
    },
    language: {
        type: String
    },
    author: {
        type: String
    },
    publishedAt: {
        type: String
    },
    sourceName: {
        type: String
    }
});
const News = mongoose.model('News', news);

export default News;


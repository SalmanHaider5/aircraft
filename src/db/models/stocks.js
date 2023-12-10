import mongoose from 'mongoose';

const stocks = new mongoose.Schema({
    company: {
        type: String,
        require: true,
        unique: true
    },
    price: {
        type: Number
    },
    changePoint: {
        type: Number
    },
    changePercentage: {
        type: Number
    },
    date: {
        type: String
    }
});
const Stocks = mongoose.model('Stocks', stocks);

export default Stocks;


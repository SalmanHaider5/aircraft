import mongoose from 'mongoose';

const accidents = new mongoose.Schema({
    ntsbNo: {
        type: String,
        require: true
    },
    completionStatus: {
        type: String
    },
    eventType: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    country: {
        type: String
    },
    reportNo: {
        type: String
    },
    nNumber: {
        type: String
    },
    make: {
        type: String
    },
    model: {
        type: String
    },
    highestInjuryLevel: {
        type: String
    },
    hasSafetyRec: {
        type: String
    },
    mode: {
        type: String
    },
    reportType: {
        type: String
    },
    reportDate: {
        type: String
    }
});
const Accidents = mongoose.model('Accidents', accidents);

export default Accidents;


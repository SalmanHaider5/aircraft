import mongoose from 'mongoose';

const airports = new mongoose.Schema({
    icao: {
        type: String,
        require: true,
        unique: true
    },
    airportName: {
        type: String
    },
    city: {
        type: String
    },
    country: {
        type: String
    },
    lat_long: {
        type: String
    },
    elevation: {
        type: String
    },
    runwayLength: {
        type: String
    },
    surface: {
        type: String
    },
    fuel: {
        type: String
    },
    fbo: {
        type: String
    },
    lat: {
        type: String
    },
    lng: {
        type: String
    }
});
const Airports = mongoose.model('Airports', airports);

export default Airports;


import mongoose from 'mongoose';

const airports = new mongoose.Schema({
    icao: {
        type: String,
        require: true
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
    iata: {
        type: String
    },
    lat: {
        type: String
    },
    long: {
        type: String
    }
});
const Airports = mongoose.model('Airports', airports);

export default Airports;


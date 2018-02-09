var mongoose = require('mongoose');

var propertySchema = new mongoose.Schema({
    date: {
        type: Date,
        "default": Date.now
    },
    image: String,
    option: String,
    status: String,
    location: String,
    type: String,
    bedroom: String,
    bathroom: String,
    parking: String,
    price: String,
    layout: String,
    land: String,
    district: String,
    latitude: String,
    longitude: String,
    description: String,
});

mongoose.model('Property', propertySchema, 'properties');
var mongoose = require('mongoose');
var Property = mongoose.model('Property');

module.exports.getAllProperties = function(req, res){
    Property
    .find()
    .exec(function(err, properties){
        if (err){
            console.log(err);
            res
            .status(500)
            .json(err);
        } else {
            console.log('GET call succeeded.');
            res
            .status(200)
            .json(properties);
        };
    });
};

module.exports.getPropertyById = function(req, res){
    var id = req.params.id;

    Property
    .findById(id)
    .exec(function(err, doc){
        var response = {
            status: 200,
            message: doc
        };

        if (err){
            console.log(err);
            response.status = 500;
            response.message = err;
        } else if (!doc){
            console.log('Property not found!');
            response.status = 404;
            response.message = {
                'message': 'Property not found!'
            };
        }

        res
        .status(response.status)
        .json(response.message);
    });
};

module.exports.postNewProperty = function(req, res){
    Property
    .create({
        image: req.body.image,
        images: req.body.images,
        option: req.body.option,
        status: req.body.status,
        district: req.body.district,
        location: req.body.location,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        type: req.body.type,
        bedroom: req.body.bedroom,
        bathroom: req.body.bathroom,
        parking: req.body.parking,
        layout: req.body.layout,
        land: req.body.land,
        description: req.body.description,
        price: req.body.price
    }, function(err, property){
        if (err){
            console.log(err);
            res
            .status(400)
            json(err);
        } else {
            console.log('POST call succeeded');
            res
            .status(201)
            .json(property);
        };
    });
};

module.exports.deletePropertyById = function(req, res){
    var id = req.params.id;

    Property
    .findByIdAndRemove(id)
    .exec(function(err, property){
        if (err){
            console.log(err);
            res
            .status(404)
            .json(err);
        } else {
            console.log('Delete call succeeded.');
            res
            .status(204)
            .json();
        };
    });
};
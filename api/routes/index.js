var express = require('express');
var router = express.Router();

var PropertyController = require('../controllers/property.controller.js');
var UserController = require('../controllers/user.controller.js');

router
.route('/property')
.get(PropertyController.getAllProperties)
.post(UserController.authenticate, PropertyController.postNewProperty);

router
.route('/property/:id')
.get(PropertyController.getPropertyById)
.delete(UserController.authenticate, PropertyController.deletePropertyById);

router
.route('/user')
.get(UserController.authenticate, UserController.getAllUsers)
.post(UserController.authenticate, UserController.postNewUser);

router
.route('/user/:id')
.delete(UserController.authenticate, UserController.deleteUserById);

router
.route('/user/login')
.post(UserController.login);

module.exports = router;
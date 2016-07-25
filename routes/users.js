var express = require('express');
var router = express.Router();
var UserModel = require('../models/user');

router.list = function(req,res){
	UserModel.list(req,res);
};

router.getUser = function(req,res){
	UserModel.getUser(req,res);
};

router.create = function(req,res){
	UserModel.create(req,res);
};

router.update = function(req,res){
	UserModel.update(req,res);
};

router.delete = function(req,res){
	UserModel.delete(req,res);
};

module.exports = router;

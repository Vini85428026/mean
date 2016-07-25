var connection = require("./index");

var mongoose = connection.mongoose,
Schema = mongoose.Schema;

var UserSchema = new Schema({
	name : {type:String,default: ''},
	email : {type:String,default: '',unique:true},
	password : {type:String,default: ''}
});

var User = mongoose.model('User', UserSchema);

exports.list = function(req,res){
	User.find().exec(function(err,users){
		if(err){
			console.log(err);
		}else{
			res.json(users);
		}
	})
};

exports.getUser = function(req,res){
	var id = req.params.id;

	User.findOne({_id:id}).exec(function(err,users){
		if(err){
			console.log(err);
		}else{
			res.json(users);
		}	
	});
};	

exports.create = function(req,res){
	var d = req.body;

	var dados = {
		password: d.password,
		email: d.email,
		name: d.name,
	}

	var user = new User(dados);
	
	user.save(function(err,usuario){
		if(err){
			console.log(err);
		}else{
			res.json(usuario);
		}
	});

}

exports.update = function(req,res){
	var id = req.params.id;
	var d = req.body;
	
	User.update({_id:id},d,function(err,usuario){
		if(err){
			console.log(err);
		}else{
			res.json(usuario);
		}
	});

}

exports.delete = function(req,res){
	var id = req.params.id;
	
	User.remove({_id:id}, function(err,usuario){
		if(err){
			console.log(err);
		}else{
			res.json(usuario);
		}
	});

}
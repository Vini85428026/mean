var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/mean");

var db = mongoose.connection;

db.on("error", function(err){
	console.log("Erro de conexao",err);
});

db.once("open", function(){
	console.log("Conexao aceita");
});

exports.mongoose = mongoose;

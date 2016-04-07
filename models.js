Mongoose = require ("Mongoose"); 

var MessageSchema = new Mongoose.Schema({
	"email": String,
	"content": String,
	"created": Date 
});

exports.Message =  Mongoose.model('Message', MessageSchema); 

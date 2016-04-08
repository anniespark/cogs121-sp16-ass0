var models = require('../models');

exports.send = function(req, res) {
    console.log(req.body); // help you see what is inside of req.body
    //variables for the new content and date
    var newMessage;
    var date = new Date(); 
    //receive contents from a POST request
    if (req.body.email && req.body.content) {
    	newMessage = new models.Message({
    		'email': req.body.email, 
    		'content': req.body.content, 
    		'created': date.getDate()
    	});
    newMessage.save(function(err) {
    	if (err) console.log(err);
    	res.redirect('/'); 
    });
    }
};
var models = require('../models');

exports.send = function(req, res) {
    console.log(req.body); // help you see what is inside of req.body
    // your solution 
    var newMessage = new models.Message(req.body);
    //receive contents from a POST request
    newMessage.save(afterSaving);//save to database

    function afterSaving(err){ //this is a callback
    	if(err) { console.log(err); res.send(500); }
    	res.redirect('/'); //redirect back to / 

    } 

};
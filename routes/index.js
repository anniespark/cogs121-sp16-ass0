var models = require('../models');

exports.view = function(req, res) {
    models.Message
    	.find()
    	.sort('-date')
    	.exec(displayMessages);

    function displayMessages(err, message) {
    	if (err) console.log(err); //shows error message
    	res.render('index', {'data': message});
    }
}

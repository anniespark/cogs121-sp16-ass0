var models = require('../models');

exports.view = function(req, res) {
    models.Message
    	.find()
    	.sort('-date')
    	.exec(displayMessages);

    function displayMessages(err, messages) {
    	var data = {data: message};
    	res.render("index", data);
    }
}

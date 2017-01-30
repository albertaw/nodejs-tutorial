var express = require('express');

var app = express();
//paramater-based routing
app.get('/user/:userId', function (req, res) {
	res.send('userId is: ' + req.params['userId']);
});
app.listen(3000);
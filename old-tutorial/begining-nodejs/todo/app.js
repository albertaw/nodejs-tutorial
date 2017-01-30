var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//create mongodb connection and only start
//epxress listening once the connection is ok
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var db;
var itemsCollection;
MongoClient.connect('mongodb://127.0.0.1:27017/demo', function (err, database) {
	if (err) throw err;
	//connected
	db = database;
	itemsCollection = db.collection('items');
	app.listen(3000);
	console.log('listening on port 3000');
});

//create a router taht can accept json
var router = express.Router();
router.use(bodyParser.json());

//setup the collection routes
router.route('/')
	.get(function (req, res, next) {
		itemsCollection.find().toArray(function (err, docs) {
			res.send({
				status: 'items found',
				items: docs
			});
		});
	})
	.post(function (req, res, next) {
		var item = req.body;
		itemsCollection.insert(item, function (err, docs) {
			res.send({
				status: 'item added',
				itemId: item._id
			});
		});
	});

//setup the item routes
router.route('/:id')
.delete(function (req, res, next) {
	var id = req.params['id'];
	var lookup = {_id: new mongodb.ObjectID(id)};
	itemsCollection.remove(lookup, function (err, results) {
		res.send({status: 'item cleared'});
	});
});

app.use(express.static(__dirname + '/public'))
	.use('/todo', router);




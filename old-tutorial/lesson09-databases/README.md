## Resources

## Installation and setup

To begin using MongoDB it must be installed on your computer. 
You can follow these instructions to get it setup on your computer:
[https://github.com/albertaw/MongoDB-tutorial](https://github.com/albertaw/MongoDB-tutorial)

Create the blog

We will be using the Mongoose driver for node because it allows to
to give our data structure (I know that the whole point of MongoDB 
is that is schemaless but I like mongoose becuase it keeps me organized
and I feel it is easier to use than the native mongodb driver.)  

First install the node package for mongoose from the command line:

```bash
npm install mongoose
```

Next, inside the file where you start your node server connect to the database.
```javascript
\\declare dependencies
var mongoose = require('mongoose');
\\define the database url. In this example we are connecting to our local database named blog
var dbUrl = 'mongodb://localhost:27017/test';
\\create a database connection
var db = mongoose.connect(dbUrl, {safe: true});

## Create the schema

The `schema` defines the structure for our model or data. Here
we will specify what properties our collection will have.
```javascript
var schema = new mongoose.Schema({field: SchemaType, ...});
```

The object passed into the Schema method contains the name of 
the fields that the datbase document will have and the SchemaType
for each field. Possible SchemaTypes include: 

* String
* Number
* Date
* Buffer
* Boolean
* Mixed
* ObjectId
* Array

Example: create a schema for the User collection that has a firstname and lastname property.

```javascript
//require the mongoose module
var mongoose = require('mongoose');
//define the schema for a user  
var userSchema = new mongoose.Schema({
	firstname: { 
		type: String, 
		required: true,
	},
	lastname: {
		type: String,
		required: true
	}
});
```

To use the schema we defined we convert it to a model. A model
 is a constructor that allows us to create new documents. 
```javascript
var Model = mongoose.model('Model', schema)
```
'Model' represents the name of the collection in your database 
and schema is the schema we defined earlier. Example: create 
a model for our User Collection using the schema that was defined
above.

```javascript
//create the User model
var User = mongoose.model('User', userSchema)

//alternatively you can export the model so that it can be used elsewhere
module.exports = mongoose.model('User', userSchema);
```
## CRUD

### Create a document 
```javascript
var model = new Model(document)
model.save(function(err, model){
	...
});

//or

Model.create(document, function(err, model){
  ...
});
```
Example: create a new document from our User model and give it
a firstname and lastname.
```javascript
var user = new User({firstname: "Alberta", {lastname: "Williams"}});
user.save(function(err, user){
	res.json(user);
});
```

Get a document
Model.find(query, projection, options, callback)
```javascript
Model.find(query, function(err, model){
	...
});

//or

Model.findById(id, function(err, model){
	...
});

//or

Model.findOne(query, function(err, model){
	...
});
```
Example: find a user from our user collection that has an
_id id.  
```javascript
User.findById(id, function(err, user){
	res.json(user);
});
```

### update a document 
Model.update(query, update, options, callback)
Will update a document without returning it. Good if you
need to update multiple documents.

Model.findOneAndUpdate(query, update, options, callback)
useful if you do not want to update based on the id field.

Model.findByIdAndUpdate(id, update, callback)
Example: update the firstname field of the document with _id id in
our User collection.
```javascript
User.findByIdAndUpdate(id, {$set: {firstname: "Jane"}}, function(err, user){
	//errorhandler
	res.json(user);
});
```

Another approach is to find the document, update the properties, 
then save the document.
```javascript
Model.findById(id, function(err, model){
	//errorhandler
	model.prop = value;
	model.save(function(err){
		//errorhandler
		res.json(model);
	});
});
```

### Delete a document

Model.remove(query, callback);
Model.findByIdAndRemove(id, options, callback)
Model.findOneAndRemove(query, options, callback)

Example: delete the user from the User collection with the 
_id id.
```javascript
User.findByIdAndRemove(id, function(err, user){
	//errorhandler
	res.json(user);
});
```
## Project

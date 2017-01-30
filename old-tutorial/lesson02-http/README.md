
Each file is its own module.
Each file has access to the current module definition using the module variable
Export the current module using module.exports
Import a module using the require function.   
var module = require('./path/to/module');

Different ways to create a module

1. exporting a function, useful for creating route handlers 
exports.name = function (req, res) {
	res.send("hello");
}
2. exporting an object, useful when we are creating our models in mongo db
var publicMethod = function () {

}
 module.exports = publicMethod

3. exporting more than one obect 
module.exports = {
	functionA: publicMethodA,
	functionB: publicMethodB
}
4. aggregation module, organizes files so that we only need 
to require one file
exports.moduleA = require(‘./moduleA);
exports.moduleB = require(‘./moduleB);

### Directory structure of a project

app.js - 
package.json  
config/  
db/  
logs/  
models/  
public/ - static assets  
|--scripts/  
|--styles/  
|--images/  
routes/  
tests/  
views/  

#### TASK: 

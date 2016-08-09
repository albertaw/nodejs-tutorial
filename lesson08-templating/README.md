## Angular and Node

An example crud app that uses Angular as the frontend 
framework.  Contains routes to get all users, create a user, 
get a user by id, update a user by id, and delete a user by id.


### How it works
On the server we have defined our routes and their request
handlers.  And in Angular we have created a service with 
methods that correspond to each route request.  In index.js
where we start our server we have this route:

```javascript
app.get('/api/users', function (req, res){
	res.json(users);
});
```

This tells the server to send a json list of our data to the
browser when it receives a GET request for the route '/api/users'.
In our client side code, we write the code to make this GET request. In js/services/users.js we have created a factory named 'Users' that returns an object with that contains the following method:

```javascript
get: function () {
			return $http.get('/api/users');
	}
```

This method returns the data for users that the server sent.  Then in js/controllers/MainController.js we call this get function
so we can actually access the data. We assign the output to the variable $scope.users so that users can be used in the view.  

```javascript
Users.get()
	.then(function(response){
		$scope.users = response.data;
	}, 
	function(response){
		console.log(response.statusText);
	});
```

Finally, in our view views/main.html we iterate over $scope.users 
and display the properties of each object in an expression.
```html
<div class="row" ng-repeat="user in users">
	<a href="/#/{{user.username}}"><h3 class="">{{user.firstname + " " + user.lastname}}</h3></a>
</div>
```

When we visit the root page of our app, we will see a list of each
users first and last name that is hyperlinked to go to their page.
Our app knows to display this view because in js/app.js we said to inject the main view in our index.html page when we visit '/'
and inject the controller MainController into that view.

```javascript
$routeProvider
	.when('/', {
		controller: 'MainController',
		templateUrl: 'views/main.html'
	})
```
TODO:
Create a static website and store it in a folder name public.
Check your code into Github.
Deploy the app to Heroku.

Abstraction 

middleware

routes

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

### How to organize your Express entry file:
1. Include third party dependencies and modules
2. Instantiate Express.js objects and others
3. Configure app settings such as port, views, view engine
4. Connect to databases
5. Define middleware such as error handlers, static file folders, cookies, and other parsers.
6. Define routes and their request handlers
7. Start the app 
8. Export app as module (optional) 

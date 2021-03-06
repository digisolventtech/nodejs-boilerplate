# node-mongo-boilerplate

# most challenging part for making a nodejs server is building the architecture and the flow design. We need to invest a good amount of time for this.
# Good architecture always lead:

1. Readability
2. Extendibility
3. Reusability
4. Testability
5. Performance

# Suitable for:

1. Creating server using node.js, express.js and mongodb.
2. If, you are a newbie and  don't have enough time to invest on the architecture.
3. If, you want to learn and explore architecture.
4. Looking for like a framework type.

# Features:

1. MongoDb connection management.
2. JWT token authentication.
3. Well defined folder structure for small and very large project.
4. Standard error and response handling.
5. Route handling.
6. CORS configuration.
7. Parser configuration.

# How to start

1. install node.js=> https://nodejs.org/en/download/
2. clone the repo=> git clone url
3. git fetch --all
4. git checkout master
5. install packages=> npm i
6. create .env file at root folder
7. set .env file=> follow the sample.env.example
8. npm start or npm run dev(start with nodemon)

# Node.js version used:
  v14.16.1

# Following ES6 code

# pattern used:

 1. Singleton
 2. Reveling
 3. Modular
 4. Service Locator

# Why used above pattern:

 1. Work with single instance.
 2. Easily import the multiple dependencies.
 3. Reduce the number of import syntax line.
 4. High cohesion and low coupling.
 5. Easy to scaling and more reuseable.
 6. Maintaining the single code standard inside a team.

 # File structure and file responsibility:
 
 1. server.js:
        First file, which start initializing the server.
 2. app.js:
        Start initializing all the resources, configuration needed for the server(config) and starts the server.
 3. config:
        Each file in the config folder are responsible for initializing specific resources:
        a. cors=> will configure the cors for your server
        b. db=> will create connection with mongoDb server(MONGO_CONNECTION_STRING) and monitor
        c. parser=> will configure the body parser
        d. router.js=> will configure your routers
        So, if you have any new configuration, which should be initialize before the server starts
            i. Then create a file inside config folder and do your code
            ii. Then, call that function/configuration inside app.js
            
4. /api:
        This folder have all the codes related to the app.
        The following folder is present
        a. /schema=> contain schema of your collections
        b. /models=> only allow to perform operation on collections
        c. /routes=> contain all the apis, of your project(directly connected to the controller)
        d. /controller=> contain function/handler for each api(1:1)
        e. /worker=> contain all the business logics
        f. /helper=> contain all the supporting function those going to help our worker
        d. /middleware=> contain all the middleware of your project
        f. /services=> will contain all the third-party services related logic
        d. responseHandler=> responsible to handle your response, design generic standard response for all success and error request
        
5. /api/models=> 
number of file in a model is equal to number of collection in your project, for now we have only one ("test") collection.

Each file have all the queries for a specific collections (for reference please follow /model/test.js, 1:1 relationship)
models folder also have an index.js file where you need to register your models, which will help us to import multiple models from a single source.

6. api/schema=>
Number of file in this folder is equal to the number of collection we have. Please for /schema/test.js file for reference.
This folder also have an index.js file, where we need to register our all the schema for easily import in other files

7. api/middleware=>
All the middleware logic should be available inside this folder. As we need to register our all middleware function in /middleware/index.js

This middleware already have jwt-token verification code(middleware/tokenValidation). Please check and do your changes as per your need.(/helper/jwt.js, for encode and decode)

For throwing any error from middleware use "next(err)". Because you have another middleware for handling all yours error globally.

8. /api/worker=> 
All the business logic going to be present here as well as workers will be responsible for handling the error of your logic. Please follow "/worker/sample.js" for reference.

9.  /api/controller
Contain all the handler/function for individual api. Here we use controller function as a middleware, because we have a middleware to handle the responses.
For that controller should add an object inside the response with key name "body" (response['body']={data: 123})
If body contains "data" that means "success", if there is no "data" or "error" key, that means the request is failed.
For reference please follow "/controller/test.js"

10. api/routes=>
Contain all the routes files for individual controller. For reference please follow "/routes/test.js"

Inside a routes folder we also have an index.js file.
Which will read all files present in routes folder and then create a path and register them.
Its an automated process, so no needs to do anything inside index.js file.

**Path Construction**

1. Read path prefix from .env file "PATH_PREFIX", let PATH_PREFIX=digisolvent
2. Read file name, if file name is demo-file.js
3. Your path will be /digisolvent/demo-file/actual-path-in-file
4. Ff file name is demo.js, then /digisolvent/demo/actual-path-in-file

**Global router middleware**

app.use('*', ()=>{}), for handle 404 route and success route response
app.use((error, res, res, next)=>{}), for handle the middleware error or route error

11. /api/responseHandler
It have 2 files
    a. error.js=> Its a object of objects, where each object contain message, status for each type of error. So, if you want to add any new error then add here. And everywhere you need to specify the key present in the file.

    Because whenever middleware find any error, then handler try to read this from the error.js and if not found then send default error('internal_error')

    b. handler.js=> Constructing response. It will help us to send single type of response for all the apis either success or error. If you want change your response pattern, then do inside this file.

For initial testing, you can use following url
Consideration: 

a. PATH_PREFIX=digisolvent
b. PORT=8080

Get: http://localhost:8080/digisolvent/test/health( to check server is running )

Get: http://localhost:8080/digisolvent/test/health-error (to check error handling working )

Get: http://localhost:8080/digisolvent/test/check-token-header (to check token validation is working )

Post: http://localhost:8080/digisolvent/test/test-token (to check token creation)


                                                  **|| If you liked, then give a star ||**




const express = require("express");   //this is a instance of the module express
const app = express();         //this is a instance of the "local" express
const dotenv = require("dotenv").config(); //this is a instance of the enviroment variables
const dboperations = require('./dbOperators');  
const sql = require("mssql");

const port = process.env.PORT; //obtain from the enviroment variables the PORT

/*its a asynchronous funtion that's called if the "/api/main"  directory is being consulted.  
Using a get method, it will use a callback to send a respond to the user. */
//app.get("/api", require("./routes/loginRoutes"));

var config = {
    "user": "login", 
    "password": "1234", 
    "server": "KAREN", 
    "database": "BlockBuster", 
    "options": {
        "encrypt": false // Disable encryption
    }
}

sql.connect(config, err => {
    if (err) {
        throw err;
    }
    console.log("Connection Successful!");
});



app.get("/", (request, response) => {
    new sql.Request().query("SELECT * FROM Employee", (err, result) => {
        if (err) {
            console.error("Error executing query:", err);
        } else {
            response.send(result.recordset); // Send query result as response
            console.dir(result.recordset);
        }
    });
});

/*dboperations.getLoginDetails().then(result=>{
 console.log( result);
})*/

// its a funtion that given a port it will return us a server for the app.
app.listen(port, ()=>{
    console.log("Listening in port " + port);
}); 

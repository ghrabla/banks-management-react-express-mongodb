// requiring features
require("./mongodb/db");
require('dotenv').config();
const express = require("express"); 
const AppError = require("./helpers/appError");
const errorHandler = require("./helpers/errorHandler");
const cors = require("cors"); 
const router = require("./routes");
const bodyParser =  require("body-parser");
const app = express();  
const port = process.env.port;   
  
  


app.use(cors())
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false }));  
app.use(router) 
 
  
  // node js apperror class (error) extanding  
app.all("*", (req, res, next) => { 
    next(new AppError(`The URL ${req.originalUrl} does not exists`, 404));
  });
  
// using errors handler
app.use(errorHandler);


app.listen(port, () => {
    console.log(`Application is listening at port ${port}`); 
});
 

module.exports = app;
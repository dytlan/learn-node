//Global Package
const path          = require('path');

//3rd Party Package
const express       = require('express');
const bodyParser    = require('body-parser');

//Export File Routing
const shopRoute     = require('./routers/shop');
const adminRoute    = require('./routers/admin');

//Run Package Express
const app       = express();

//Run Package Body Parser
app.use(bodyParser.urlencoded({extended:true}));

//Set up static path to public folder
app.use(express.static(path.join(__dirname,'public')));

//Set up templating engine
app.set('view engine','ejs');
//Register Folder for templating engine
app.set('views','views');

//Routing
app.use('/admin',adminRoute);
app.use(shopRoute);

//Create a Server with port 3000
app.listen(3000);
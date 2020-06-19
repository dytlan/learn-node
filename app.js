const path          = require('path');

const express       = require('express');
const bodyParser    = require('body-parser');

const shopRoute     = require('./routers/shop');
const adminRoute    = require('./routers/admin');

const app       = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

app.set('view engine','ejs');

app.set('views','views');


app.use('/admin',adminRoute);
app.use(shopRoute);



app.listen(3000);
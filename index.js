const express = require('express');
//const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('./db/db')
const hbs =require('hbs')
const app = express();
const path = require('path'); 
const serveStatic = require('serve-static');

const template_Path=path.join(__dirname,'template')
 app.use(serveStatic(__dirname + '/public'));
app.set('view engine' ,'hbs')
 app.set('views',template_Path)
app.use(express())
app.use(express.urlencoded({extended:false}));


// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
// mongoose.connect('mongodb://0.0.0.0/bookstore', { useNewUrlParser: true, useUnifiedTopology: true });
// const db = mongoose.connection;
// db.on('error', (error) => console.error(error));
// db.once('open', () => console.log('Connected to Database'));

// Routes  `
  

app.get('/index.html', function (req, res) {  
    res.sendFile( __dirname + "/" + "index.html" );  
 })  
 app.get('/process_get', function (req, res) {  
 response = {  
        title:req.query.title,  
        author:req.query.author, 
        genre:req.query.title,  
        publishedYear:req.query.author,   
    };  
    console.log(response);  
    res.end(JSON.stringify(response));  
 }) 
const apiRouter = require('./routes/api');
app.use('/api', apiRouter);

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));

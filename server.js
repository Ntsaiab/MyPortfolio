if(process.env.NODE_ENV === 'development') {
    require('dotenv').config()
}// <= Heroku
//___________________
//Dependencies
//___________________
const express = require('express');
const methodOverride  = require('method-override');
const mongoose = require ('mongoose');
const app = express ();
const db = mongoose.connection;
const show = console.log;
show('KEEP CALM AND SHOW TRUST');
const Project = require('./models/projects.js');
const Comment = require('./models/comments.js');
const { findById } = require('./models/projects.js');

//___________________
//Port
//___________________
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3000; // <= Heroku

//___________________
//Database
//___________________
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI;
const projects = [
    {
       name: "memoryJs",
       link: "some link",
       screenshot: "some pic",
       description: "game for beginners" 
    }
]
// Connect to Mongo
mongoose.connect(MONGODB_URI ,  { useNewUrlParser: true, useUnifiedTopology: true});

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongodb not running?'));
db.on('connected', () => console.log('CONGO MONGO ' /*MONGODB_URI*/));
db.on('disconnected', () => console.log('mongo disconnected'));

// open the connection to mongo
db.on('open' , ()=>{});

//___________________
//Middleware
//___________________

//use public folder for static assets
app.use(express.static('public'));

// populates req.body with parsed info from forms - if no data from forms will return an empty object {}
app.use(express.urlencoded({ extended: false }));// extended: false - does not allow nested objects in query strings
app.use(express.json());// returns middleware that only parses JSON - may or may not need it depending on your project

//use method override
app.use(methodOverride('_method'));// allow POST, PUT and DELETE from a form

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


//___________________
// Routes
//___________________
//localhost:3000 
app.get('/about', (req, res) => {
  res.render('About');
});

app.get('/travels', (req, res) => {
    res.render('Travels');
  });

app.get('/contact', (req, res) => {
    res.render('Contact');
  });

//Index
app.get('/projects', (req, res) => {
    Project.find({}, (err, allProjects) => {
        if(!err){
            res.render('Index', {
                projects: allProjects,
            })
        } else {
            res.send(err)
        }
    })
})

app.get('/comments', (req, res) => {
    Comment.find({}, (err, allComments) => {
        if(!err){
            res.render('Aboutu', {
                comments: allComments,
            })
        } else {
            res.send(err)
        }
    })
})
// NEW
app.get('/comments/new', (req, res) => {
    res.render('New');
})

// DESTROY/DELETE
// UPDATE
// CREATE
// EDIT
// SHOW
//___________________
//Listener
//___________________
app.listen(PORT, () => console.log( 'Listening on port:', PORT));
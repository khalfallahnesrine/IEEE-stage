const express = require('express');
const Index = express()
const routes = require('./routes'); 
const PORT = process.env.PORT || 5000;
Index.set('view engine', 'ejs');



//Tak 5 :views and routing 
Index.get('/home', (req, res) => {
    res.render('home', { title: 'Home Page', content: 'Welcome to our website!' });
  });
  
  Index.get('/about', (req, res) => {
    res.render('about', { title: 'About Us', content: 'Learn more about us here.' });
  });
  
  Index.get('/start', (req, res) => {
    res.render('start', { title: 'Start Page', content: 'Lets start the adventure!' });
  });

// Task 3 : views and routing 
Index.get('/', (req, res) => {
    res.send('Welcome to the home page');
  });
Index.get('/about', (req, res) => {
    res.send('Welcome to theAbout page');
  });
  
Index.get('/start', (req, res) => {
    res.send('Welcome to the start page');
  });
Index.use((req, res) => {
    res.status(404).send('Page not found');
  });

Index.listen(PORT , console.log('server listening on port ' + PORT ));
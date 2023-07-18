const express = require('express')
const app = express()

const PORT = process.env.PORT || 5000;

const routes = require('./routes'); 
// task2 : views and routing 
app.use('/', routes); 
// task1 : views and routing 
app.get('/users', (req, res) => {
    res.send("Welcome to the user page");
  });

app.get('/about', (req, res) => {
    res.send("Welcome to the about page");
  });



app.listen(PORT , console.log('server listening on port ' + PORT ));
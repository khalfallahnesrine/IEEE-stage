const express = require('express');
const router = express.Router();

//task1 : Routes&views 
router.get('/', (req, res) => {
  res.send("Welcome !");
});

router.get('/home', (req, res) => {
  res.send("Welcome to the  page");
});

router.get('/start', (req, res) => {
  res.send('Welcome to the start page');
});

module.exports = router;
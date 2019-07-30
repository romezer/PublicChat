const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const sqldb = require('./mysql.js');
var uniqid = require('uniqid');


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);


 

app.get('/api/greeting', (req, res) => {
  const name = req.query.name || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

app.get('/api/select', (req, res) => {
  sqldb.selectFromMessages().then(function(resaults,error){
    res.setHeader('Content-Type', 'application/json');
    if(error){
      res.send(JSON.stringify(error));
    }else{
      res.send(JSON.stringify(resaults));
    }
  })
});

app.get('/api/selectAll', (req, res) => {
  sqldb.selectAllMessages().then(function(resaults,error){
    res.setHeader('Content-Type', 'application/json');
    if(error){
      res.send(JSON.stringify(error));
    }else{
      res.send(JSON.stringify(resaults));
    }
  })
});

app.get('/api/selectActive', (req, res) => {
  sqldb.selectActiveUsers().then(function(resaults,error){
    res.setHeader('Content-Type', 'application/json');
    if(error){
      res.send(JSON.stringify(error));
    }else{
      res.send(JSON.stringify(resaults));
    }
  })
});

app.get('/api/insert', (req, res) => {
  sqldb.insertNewMessage(uniqid(), req.query.nickName, req.query.text, req.query.avatar).then(function(resaults, error){
    res.setHeader('Content-Type', 'application/json');
    if(error){
      res.send(JSON.stringify(error));
    }else{
      res.send(JSON.stringify(resaults));
    }
  })
});

app.listen(3003, () =>
  console.log('Express server is running on localhost:3003')
);


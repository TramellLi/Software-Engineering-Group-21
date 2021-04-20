// Get dependencies
const express = require('express');
var timeout = require('connect-timeout');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const db =  require('./db')

// Get our API routes
const api = require('./server/routes/api');

const app = express();

//testing
var assert = require('assert');

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Point static path to dist (folder where build files are located)
app.use(express.static(path.join(__dirname, 'dist/dashboard1')));

// Set time out period
app.use(timeout('15s'));

// Set our api routes
app.use('/api', api);

//Set 404
app.use(function(req, res, next){
   if(!res.headersSent){
      var err = new Error('Not Found');
      err.status = 404;
      next(err);
   }
});

//Error handlers
app.use(function(err, req, err, next){
   if(req.timeout && req.headers.upgrade === 'websocket'){
      return;
   }
   
   var statusCode = err.status || 500;
   if(statusCode === 500){
      console.error(err.stack||err);
   }
   if(req.timeout){
      console.error('timeout', req.originalUrl, err.timeout);
   }
   res.status(statusCode);
   var err = {}
   if(app.get('env') === 'development'){
      error = err;
   }
   res.render('errer',{
      message: err.message,
      error: error
   });
});


// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));

module.exports = app;

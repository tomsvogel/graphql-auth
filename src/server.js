import express from 'express';
import bodyParser from 'body-parser';
import {router} from './router';
import logger from 'morgan';
import mongoose from 'mongoose';
import config from './config/main';

const app = express();

// Database Setup
mongoose.connect(config.database);

// Start the server
let server = app.listen(config.port);

// Setting up basic middleware for all Express requests
app.use(bodyParser.urlencoded({extended: false})); // Parses urlencoded bodies
app.use(bodyParser.json()); // Send JSON responses
app.use(logger('dev')); // Log requests to API using morgan

// Enable CORS from client-side
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials',
  );
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

// Import routes to be served
router(app);

export default server;

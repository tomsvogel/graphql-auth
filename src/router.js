// import AuthenticationController from './controllers/authentication';
import express from 'express';
// import passport from 'passport';
// const ROLE_MEMBER = require('./constants').ROLE_MEMBER;
// const ROLE_CLIENT = require('./constants').ROLE_CLIENT;
// const ROLE_OWNER = require('./constants').ROLE_OWNER;
// const ROLE_ADMIN = require('./constants').ROLE_ADMIN;

import './service/passport';
import {graphqlExpress, graphiqlExpress} from 'graphql-server-express';
import {printSchema} from 'graphql/utilities/schemaPrinter';

import schema from './graphql/schema';

// Middleware to require login/auth
// const requireAuth = passport.authenticate('jwt', {session: false});
import authRoutes from './routes/AuthRoutes';
export function router(app) {
  // Initializing route groups
  const apiRoutes = express.Router();
  //= ========================
  // Auth Routes
  //= ========================

  apiRoutes.use('/api/auth', authRoutes);
  apiRoutes.get('/', (req, res) => {
    res.json('welcome to starter api, route for testing server');
  });
  //= ========================
  // GRAPHQL
  //= ========================
  apiRoutes.use(
    '/graphql',
    graphqlExpress({
      schema
    }),
  );
  apiRoutes.use(
    '/graphiql',
    graphiqlExpress({
      endpointURL: '/graphql'
    }),
  );

  apiRoutes.use('/schema', (req, res) => {
    res.set('Content-Type', 'text/plain');
    res.send(printSchema(schema));
  });
  // apiRoutes.get('/admins-only', requireAuth, AuthenticationController.roleAuthorization(ROLE_ADMIN), (req, res) => {
  //   res.send({content: 'Admin dashboard is working.'});
  // });

  app.use('/', apiRoutes);
}

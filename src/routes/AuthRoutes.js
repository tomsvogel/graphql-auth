import express from 'express';
import passport from 'passport';
import * as AuthenticationController from '../controller/authentication';
let routes = express.Router();

const requireLogin = passport.authenticate('local', {session: false});

routes.post('/register', AuthenticationController.register);

// Login route
routes.post('/login', requireLogin, AuthenticationController.login);

// Password reset request route (generate/send token)
routes.post('/forgot-password', AuthenticationController.forgotPassword);

// Password reset route (change password using token)
routes.post('/reset-password/:token', AuthenticationController.resetPassword);

export default routes;

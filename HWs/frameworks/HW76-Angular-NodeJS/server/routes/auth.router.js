const authRouter = require("express").Router();
const { validateAuth } = require('../controllers/auth.controller');

authRouter.post('/auth', validateAuth);

module.exports = {
    authRouter
}
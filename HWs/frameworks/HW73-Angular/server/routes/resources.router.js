const resourceRouter = require('express').Router();

const { getResources } = require('../controllers/resources.controller');

resourceRouter.get("/resources", getResources);

module.exports = {
    resourceRouter
}
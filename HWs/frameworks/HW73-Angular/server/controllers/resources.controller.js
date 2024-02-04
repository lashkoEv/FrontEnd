const { resourcesModel } = require('../models/resources.model');


function getResources(req, res) {
    return res.json(resourcesModel);
}

module.exports = {
    getResources
}
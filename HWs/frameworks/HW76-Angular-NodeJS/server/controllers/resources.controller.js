const mongoose = require('mongoose');

const resources = mongoose.model("Resources", {});

async function getResources(req, res) {
    try {
        const foundResources = await resources.find({});
        
        return res.json(foundResources);
    } catch(e) {
        console.log('[e.message]', e.message);
    }
}

module.exports = {
    getResources
}
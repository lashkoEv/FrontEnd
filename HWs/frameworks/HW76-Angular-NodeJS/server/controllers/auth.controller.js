const { AuthModel } = require('../models/auth.model');

async function validateAuth(req, res) {
    console.log('[req.body]', req.body);

    const results = await AuthModel.find({}).exec();

    console.log('[results]', results);
    const foundUser = results.find(el => {
        const condition = el.email === req.body.email 
            && el.password === req.body.password;

        if(condition) {
            return el;
        }
    });

    if(!foundUser) return res.json({
        errMsg: "User is not found"
    });

    return res.json(foundUser);
}

module.exports = {
    validateAuth
}
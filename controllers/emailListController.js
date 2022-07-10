const asyncHandler = require('express-async-handler');

const EmailList = require('../models/emailListModel');

const addEmail = asyncHandler(async (req, res) => {
    console.log('hitting addEmail endpoint');
    console.log(req);
    const resp = await EmailList.create(req.body);

    console.log('addEmail resp: ', resp);


})

module.exports = {
    addEmail
}
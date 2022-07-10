const asyncHandler = require('express-async-handler');

const EmailList = require('../models/emailListModel');

const addEmail = asyncHandler(async (req, res) => {

    const emailAlreadyExists = await EmailList.find({ email: req.body.email})

    if(emailAlreadyExists.length > 0){
        console.log('inside of the if')
        res.status(400).json({ message: `The email you entered is already a part of the email list`})
    }else{
        console.log('inside of the else');
    // console.log('hitting addEmail endpoint');
    // console.log(req.body.email);
    const newEmailOnList = await EmailList.create(req.body);

    res.status(200).json(newEmailOnList)
    }
    
})

module.exports = {
    addEmail
}
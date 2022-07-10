const express = require('express');
const router = express.Router();

const {
    addEmail
} = require('../controllers/emailListController')

router.post('/', addEmail)

module.exports = router;
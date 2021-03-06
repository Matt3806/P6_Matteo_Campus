const express = require('express')
const router = express.Router()
const userCtrl = require('../controllers/user')
const validator =  require('..//middleware/validator')

router.post('/signup', validator, userCtrl.signup)
router.post('/login', validator, userCtrl.login)

module.exports = router
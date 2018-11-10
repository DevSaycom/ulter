const express = require('express')
const router = express.Router()
const isAuth = require('../libs/auth')

//admin controllers
const adminIndexController = require('../controllers/admin/admin.index')
const adminLoginGetController = require('../controllers/admin/admin.login.get')
const adminLoginPostController = require('../controllers/admin/admin.login.POST')
const adminRegisterGetController = require('../controllers/admin/admin.register.get')
const adminRegisterPostController = require('../controllers/admin/admin.register.POST')

const mensajesIndexController = require('../controllers/comments/comment.get')

//admin routes
router.get('/', adminIndexController.admin_index)
router.get('/mensajes', mensajesIndexController.comments_get)

//login
router.get('/login', adminLoginGetController.login_get)
router.post('/login', adminLoginPostController.login_POST)

//register
router.get('/register', adminRegisterGetController.register_get)
router.post('/register', adminRegisterPostController.register_POST)

//aqui van otros. post y weas asi.





module.exports = router
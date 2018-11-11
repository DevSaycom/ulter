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
const singleMensajeController = require('../controllers/comments/comment.single')

//admin routes
router.get('/', isAuth, adminIndexController.admin_index)
router.get('/mensajes', isAuth, mensajesIndexController.comments_get)
router.get('/mensajes/:_id', isAuth, singleMensajeController.get_single_mensaje)

//login
router.get('/login', adminLoginGetController.login_get)
router.post('/login', adminLoginPostController.login_POST)

//register
router.get('/register', adminRegisterGetController.register_get)
router.post('/register', adminRegisterPostController.register_POST)

//aqui van otros. post y weas asi.





module.exports = router
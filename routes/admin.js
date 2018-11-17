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

//indice
const principalGetController = require('../controllers/indice/principal.get')
const principalPOSTController = require('../controllers/indice/principal.POST')
const principalEditGetController = require('../controllers/indice/principal.edit.get')
const principalEditPostController = require('../controllers/indice/pincipal.edit.POST')

//indice/en
const indinglesGetController = require('../controllers/indice/indingles.new')
const indinglesPostController = require('../controllers/indice/indingles.POST')
const indinglesEditGetController = require('../controllers/indice/indingles.edit.GET')
const indinglesEditPostController = require('../controllers/indice/indingles.edit.POST')

//paginas
const newPageGetController = require('../controllers/paginas/new.page.get.controller')

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

//indice
router.get('/principal/post', isAuth, principalGetController.indice_get)
router.get('/principal/edit', isAuth, principalEditGetController.indice_edit)
router.post('/principal/post', isAuth, principalPOSTController.indice_POST)
router.post('/principal/edit', isAuth, principalEditPostController.indice_edit_POST)

//indice/en
router.get('/principal/en/post', isAuth, indinglesGetController.indice_get)
router.get('/principal/en/edit', isAuth, indinglesEditGetController.indice_edit)
router.post('/principal/en/post', isAuth, indinglesPostController.indingles_POST)
router.post('/principal/en/edit', isAuth, indinglesEditPostController.indingles_edit_post)

//paginas
router.get('/paginas/post', isAuth, newPageGetController.new_page_GET)





module.exports = router
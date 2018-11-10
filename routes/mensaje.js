const express = require('express')
const router = express.Router()


const commentsPOSTController = require('../controllers/comments/comment.POST')


router.post('/', commentsPOSTController.comment_POST)

module.exports = router
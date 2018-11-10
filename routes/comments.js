const express = require('express')
const router = express.Router()

const commentsGetController = require('../controllers/comments/comment.get')
const commentsPOSTController = require('../controllers/comments/comment.POST')

router.get('/', commentsGetController.comments_get)

router.post('/', commentsPOSTController.comment_POST)

module.exports = router
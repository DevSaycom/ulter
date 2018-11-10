const Comment = require('../../models/coment.model')
const mongoose = require('mongoose')

exports.comment_POST = (req, res, next) => {
  const name = req.body.name
  const email = req.body.email
  const body = req.body.body

  let comment = new Comment({
    _id: mongoose.Types.ObjectId(),
    name: name,
    email: email,
    body: body
  })

  console.log(comment)

  comment.save((err) => {
    if (err) {
      console.error(err)
    } else {
      console.log('comment added')
      res.redirect('/')
    }
  })
}
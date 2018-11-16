const Comment = require('../../models/coment.model')
const mongoose = require('mongoose')

exports.comment_POST = (req, res, next) => {
  const name = req.body.name
  const email = req.body.email
  const body = req.body.body
  const d = new Date()

  var datestring = ("0" + d.getDate()).slice(-2) + "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" +
    d.getFullYear() + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);



  let comment = new Comment({
    _id: new mongoose.Types.ObjectId(),
    name: name,
    email: email,
    body: body,
    date: datestring,
  })

  comment.save((err) => {
    if (err) {
      console.error(err)
    } else {
      console.log('comment added')
      res.redirect('/gracias')
    }
  })
}
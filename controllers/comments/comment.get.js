const Comment = require('../../models/coment.model')

exports.comments_get = (req, res, next) => {
  Comment.find({}, (err, comment) => {
    if (err) {
      throw err
    } else {
      let inverted = comment.reverse()

      res.render('admin/mensajes', {
        title: 'Todos los Mensajes',
        mensajes: inverted
      })
    }
  })
}
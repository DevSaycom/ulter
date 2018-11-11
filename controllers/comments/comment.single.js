const Comment = require('../../models/coment.model')

exports.get_single_mensaje = (req, res, next) => {
  const id = req.params._id
  Comment.findById(id)
  .exec()
  .then((msg) => {
    console.log(msg)
    if (msg) {
      res.status(200).json({
        mensaje: msg
      })
    } else {
      res.status(404).json({
        message: 'No existe esta Id'
      })
    }
  })
  .catch((err) => {
    console.log(err)
    res.status(500).json({
      error: err
    })
  })
}
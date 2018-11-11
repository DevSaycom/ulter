const Admin = require('../../models/admin.model')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

exports.register_POST = (req, res, next) => {
  const username = req.body.username
  const password = req.body.password

  let admin = new Admin({
    username: username,
    password: password
  })

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(admin.password, salt, (err, hash) => {
      if (err) {
        console.error(err)
      } else {
        Admin.find({}, (err, result) => {
          if (result.length <= 0) {
            admin.password = hash
            admin.save((err) => {
              if (err) {
                console.error(err)
              } else {
                res.redirect('/admin/')
              }
            })
          } else {
            res.redirect('/admin/login')
          }
        })
      }
    })
  })
}
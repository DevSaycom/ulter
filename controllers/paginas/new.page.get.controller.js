exports.new_page_GET = (req, res, next) => {
  res.render('admin/paginas/nueva', {
    title: 'Nueva Página!'
  })
}
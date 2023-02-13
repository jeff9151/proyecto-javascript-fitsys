var express = require('express')
var router = express.Router()

/* GET Autenticación */
router.get('/', function (req, res) {
  if(!req.session.auth){
    res.redirect('/auth/login');
  }
  res.render('admin-index', { 'title': 'Módulo Administrativo' })
})

/* POST Validación Usuario/Contraseña */
router.post('/validate', function (req, res) {
  userAuthentication = userAuth(req, res, req.body.usuario, req.body.password)
}) // END ROUTER


module.exports = router;

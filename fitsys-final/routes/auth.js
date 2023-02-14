var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser')
var userAuth = require('./../controllers/authentication')

/* Parsing vars */
router.use(bodyParser.urlencoded({ extended: false }))

/* GET Confirmación de correo de usuario */
router.get('/confirmation', function (req, res) {
  res.render('confirmation', { 'title': 'Confirmación de Correo electrónico' })
})

/* GET Registro de usuarios en línea */
router.get('/register', function (req, res) {
  res.render('register', { 'title': 'Registro de nuevo usuario' })
})

/* GET Recuperación de clave */
router.get('/reset', function (req, res) {
  res.render('reset', { 'title': 'Recuperación de contraseña' })
})

/* GET Autenticación */
router.get('/login', function (req, res) {
  res.render('login', { 'title': 'Acceso al sistema' })
})

/* GET Logout */
router.get('/logout', function (req, res) {
  req.session = null
  res.redirect('/')
})

/* POST Validación Usuario/Contraseña */
router.post('/validate', function (req, res) {
  userAuthentication = userAuth(req, res, req.body.usuario, req.body.password)
}) // END ROUTER


module.exports = router;

var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser')
var userAuth = require('./../controllers/authentication')

/* Parsing vars */
router.use(bodyParser.urlencoded({ extended: false }))

/* GET Autenticación */
router.get('/login', function (req, res) {
  res.render('login', { 'title': 'Acceso al sistema' })
})

/* POST Validación Usuario/Contraseña */
router.post('/validate', function (req, res) {
  userAuthentication = userAuth(req, res, req.body.usuario, req.body.password)
}) // END ROUTER


module.exports = router;

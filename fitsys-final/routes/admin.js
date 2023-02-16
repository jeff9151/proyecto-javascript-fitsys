var fs = require('fs');
var express = require('express')
var router = express.Router()

/* Redirección a página login si la sesión no ha sido definida */
router.use((err, req, res, next) => {
  if (!req.session.auth) {
    //next(createError(403));
    res.status(403).send('<h1>Accesso denegado (403)</h1><hr><p>Por favor asegurese de haber ingresado en el sistema con sus credenciales en la <a href="/auth/login">página de ingreso</a>.</h1>');
  }
});

/* GET Autenticación */
router.get('/', function (req, res) {
  res.render('layouts/admin', { 'req': req, 'res': res, 'title': 'Módulo Administrativo', 'contentPath': '../admin/index' })
})

/* GET Admin Users */
router.get('/user/list', function (req, res) {
  res.render('layouts/admin', { 'req': req, 'res': res, 'title': 'Administración de usuarios', 'contentPath': '../admin/user/list' })
})

/* GET Admin Users */
router.get('/user/add', function (req, res) {
  res.render('layouts/admin', { 'req': req, 'res': res, 'title': 'Agregando nuevo usuario', 'contentPath': '../admin/user/add' })
})

/* POST Validación Usuario/Contraseña */
router.post('/validate', function (req, res) {
  userAuthentication = userAuth(req, res, req.body.usuario, req.body.password)
}) // END ROUTER


module.exports = router;

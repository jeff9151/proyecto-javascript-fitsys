var fs = require('fs');
var express = require('express')
var router = express.Router()
var form = require('./../controllers/forms')

/* Redirección a página login si la sesión no ha sido definida */
router.use((err, req, res, next) => {
  if (!req.session.auth) {
    //next(createError(403));
    res.status(403).send('<h1>Accesso denegado (403)</h1><hr><p>Por favor asegurese de haber ingresado en el sistema con sus credenciales en la <a href="/auth/login">página de ingreso</a>.</p>');
  }
});

/* GET Admin Welcome */
router.get('/', function (req, res) {
  res.render('layouts/admin', { 'req': req, 'res': res, 'title': 'Módulo Administrativo', 'contentPath': '../admin/index' })
})

/* POST Admin Form Storage/Update */
router.post('/', function (req, res) {
  if (req.xhr){
    res.send(form.process(req, res))
  }
  else {
    res.status(403).send('<h1>Accesso denegado (403)</h1><hr><p>Está intentando acceder a una página deshabilitada por el Sistema, por favor utilice la <a href="/">página principal</a> para obtener más información.</p>');
  }
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

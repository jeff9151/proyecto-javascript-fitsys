var express = require('express')
var router = express.Router()
var app = express()
var bodyParser = require('body-parser')
const { Pool } = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'fitsys',
  password: 'David88',
  port: 5432,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000
})

/* Parsing vars */
router.use(bodyParser.urlencoded({ extended: false }))

/* GET Autenticación */
router.get('/login', function (req, res) {
  res.render('login', { 'title': 'Acceso al sistema' })
})

/* POST Validación Usuario/Contraseña */
router.post('/validate', function (req, res) {

  pool.on('error', (err, client) => {
    console.error('Unexpected error on idle client', err)
    process.exit(-1)
  })

  pool.connect((err, client, done) => {

    if (err) {
      res.send('ERROR: DB CONNECTION ERROR', err.stack)
      process.exit(-1)
    }

    const query = {
      text: 'SELECT tipo FROM usuarios WHERE usuario = $1::text AND clave = CRYPT($2::text,clave)',
      values: [req.body.usuario, req.body.password],
      rowMode: 'array'
    }

    // if (err) throw err
    client.query(query, (err, resu) => {

      //done()

      if (err) {

        client.release()
        console.log(err.stack);
        res.send('ERROR: QUERY EXECUTION');
        process.exit(-1)

      }

      else if (resu.rows.length > 0) {


        // Creando una nueva sesión
        req.session.usuario = req.body.usuario
        req.session.auth = true
        req.session.tipo = resu.rows[0].tipo

        // Sending response
        res.send('OK')

        // Close connection
        client.release()

      }

      else {

        res.send('ERROR: INVALID USERNAME OR PASSWORD')
        process.exit(-1)

      }

    }) // END CLIENT

  }) // END POOL


}) // END ROUTER


module.exports = router;

const { Pool } = require('pg')
const pgConfig = require('./../config/pg-params')
const pool = new Pool(pgConfig);

module.exports = (req, res, user, pass) => {

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
      text: "SELECT nombre, apellidos, tipo FROM usuario WHERE status = 1 AND email_usuario = $1::text AND clave = CRYPT($2::text,clave)",
      values: [user, pass],
      rowMode: 'array'
    }

    console.log(query)

    // if (err) throw err
    client.query(query, (err, resu) => {

      if (err) {

        client.release()
        console.log(err.stack);
        res.send('ERROR: SQL QUERY EXECUTION');
        process.exit(-1)

      }

      else if (resu.rows.length > 0) {

        console.log('Resultado Base de datos', resu.rows)

        // Creando una nueva sesión
        req.session.nombre = resu.rows[0][0]
        req.session.apellidos = resu.rows[0][1]
        req.session.tipo = resu.rows[0][2]
        req.session.usuario = user
        req.session.auth = true

        // Close connection
        client.release()

        // Sending response
        res.send('OK')

      }

      else {

        res.send('ERROR: INVALID USERNAME OR PASSWORD')
        process.exit(-1)

      }

    }) // END CLIENT

  }) // END POOL

}


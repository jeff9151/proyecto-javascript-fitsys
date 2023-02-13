const { Pool } = require('pg')

const pgConfig = require('./../config/pg-params')
const pool = new Pool(pgConfig);

module.exports = (req, res, user, pass) => {

    console.log(pgConfig);
 
      
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
          values: [user, pass],
          rowMode: 'array'
        }
    
        // if (err) throw err
        client.query(query, (err, resu) => {
    
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
    
}


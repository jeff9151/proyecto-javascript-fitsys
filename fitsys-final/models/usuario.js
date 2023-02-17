module.exports = class Usuario {

    pgConfig
    pool
    info
    client
    done

    constructor() {

        const { Pool } = require('pg')
        this.pgConfig = require('./../config/pg-params')
        this.pool = new Pool(pgConfig)

        this.pool.on('error', (err, client) => {
            console.error('Unexpected error on idle client', err)
            process.exit(-1)
        })

        this.pool.connect((err, client, done) => {

            if (err) {
                res.send('ERROR: DB CONNECTION ERROR', err.stack)
                process.exit(-1)
            }

            this.client = client
            this.done = done

        })
    }

    new(data) {

        var keys = data.keys().join(',');
        const query = {
            text: `INSERT INTO user SET (${keys}) VALUES (` + 
            data.forEach((val,idx) => { return (idx == 'clave' ? val : '$'+ idx) }).join(',') +');',
            values: data
            //,rowMode: 'array' -> Object es por defecto
        }

        // if (err) throw err
        this.client.query(query, (err, resu) => {

            if (err) {

                this.client.release()
                console.log(err.stack);
                res.send('ERROR: SQL QUERY EXECUTION');
                process.exit(-1)

            }

            else if (resu.rows.length > 0) {

                console.log('Resultado Base de datos', resu.rows)

                // Close connection
                client.release()

                // Sending response
                return 'OK'

            }

            else {

                return 'ERROR: INVALID USERNAME OR PASSWORD'
                process.exit(-1)

            }

        }) // END client.query

    } // END NEW

}


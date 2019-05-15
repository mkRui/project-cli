const express = require('express')
const next = require('next')
const consola = require('consola')

const port = process.env.PORT || '3000'

const dev = process.env.NODE_ENV !== 'production'

const host = process.env.HOST || 'localhost'

const app = next({ dev })

const handle = app.getRequestHandler()

app.prepare().then(() => {
    const server = express()

    server.get('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(port, err => {
        if (err) throw err
        consola.ready({
            message: `Server listening on http://${host}:${port}`,
            badge: true
        })
    })
})
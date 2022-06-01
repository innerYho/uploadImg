const express = require('express')
const mysql = require('mysql2')
const conn = require('express-myconnection')
const routes = require('./routes/image.routes')

const app = express()
app.set('port', process.env.PORT || 5000)
const dbConfig = {
    host: 'localhost',
    port: '3306',
    user: 'baq',
    password: 'Asiste.2021',
    // user: 'root',
    // password: 'Admin',
    database: 'images'
}

app.use("/", routes);
app.use(conn(mysql, dbConfig, "single"))

app.listen(app.get('port'), () => {
    console.log("Server runing on port ", app.get("port"))
})
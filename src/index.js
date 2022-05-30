const express = require('express')
const mysql = require('mysql2')
const conn = require('express-myconnection')

const app = express()
app.set('port', process.env.PORT || 5000)

app.listen(app.get('port'), () => {
    console.log("Server runing on port ", app.get("port"))
})
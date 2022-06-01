const express = require('express')
const routes = express.Router()

const imageController = require('../controller/image.controller')

routes.post('/images/:tabla', imageController.upload, imageController.uploadFile)


module.exports = routes;
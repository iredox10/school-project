import express from 'express'
import * as controller from '../controllers/userController.js'

const route = express.Router()

route.post('/register', controller.register)

route.post('/log-in', controller.log_in)

route.post('/comment/:id', controller.comment)

export default route
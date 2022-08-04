import * as controller from '../controllers/userController.js'
import express from express

const route = express().Router()

route.post('/register', controller.register)


export default route
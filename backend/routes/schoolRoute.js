import express from 'express'
const route = express.Router()

import multer from 'multer'
const upload = multer({dest: 'uploads/'})

import * as controller from '../controllers/schoolController.js'


route.post('/add-school', controller.add_school)

route.get('/get-school/:id', controller.get_schools)

route.post('/add-department/:id', controller.add_department)

route.post('/add-project/:id',upload.single('files'),  controller.add_project)

export default route
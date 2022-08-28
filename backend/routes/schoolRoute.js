import express from 'express'
import upload from '../utils/multer.js'
const route = express.Router()

import * as controller from '../controllers/schoolController.js'


route.post('/add-school', controller.add_school)

route.get('/get-school/:id', controller.get_school)

route.get('/get-schools', controller.get_schools)

route.post('/add-department/:id', controller.add_department)

route.get('/get-departments/:id',controller.get_departments)

route.post('/add-project/:id', upload.single('file'), controller.add_project)


route.get('/get-projects', controller.get_projectss)

route.delete('/delete/:id', controller.delete_p)

export default route
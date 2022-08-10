import express from 'express'
import upload from '../utils/multer.js'
const route = express.Router()

import * as controller from '../controllers/schoolController.js'


route.post('/add-school', controller.add_school)

route.get('/get-school/:id', controller.get_schools)

route.post('/add-department/:id', controller.add_department)

route.post('/add-project/:id', upload.single('file'), controller.add_project)

// route.post('/upload',upload.single('file'), (req,res,next) => {
//     let file = req.file
//     res.json(file)
// })
export default route
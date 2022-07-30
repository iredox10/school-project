import School from '../models/schoolModel.js'
import Department from '../models/departmentModel.js'
import Project from '../models/projectModel.js'


export const add_school = async (req,res,next)=>{
    try {
        const school = await School.create(req.body)
        res.json(school)
    } catch (err) {
        next(err)
    }
}

export const get_schools = async (req,res,next) =>{
    try {
        const school = await School.findById(req.params.id)
        res.json(school)
    } catch (err) {
        next(err)
    }
}

export const add_department = async (req,res,next) =>{
    try {
        const department = await Department.create(req.body)
        const school = await School.findById(req.params.id)
        school.departments.push(department)
        school.save()
        res.json({department,school})
    } catch (err) {
        next(err)
    }
}


export const add_project = async (req,res,next) =>{
    try {
        const project = await Project.create(req.body)
        const department = await Department.findById(req.params.id)
        department.projects.push(project)
        res.json({project,project})
    } catch (err) {
        next(err)
    }
}
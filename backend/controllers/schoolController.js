import {readFileSync} from 'fs'

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

export const get_school = async (req,res,next) =>{
    try {
        const school = await School.findById(req.params.id)
        res.json(school)
    } catch (err) {
        next(err)
    }
}

export const get_schools = async (req,res,next) =>{
    try {
        const schools = await School.find()
        res.json(schools)
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

export const get_departments = async (req,res,next) =>{
     try{
        const school = await School.findById(req.params.id).populate('departments')
        const departments = school.departments
        res.json(departments)
     }
     catch(err){
     next(err)
    }
}

export const get_department = async (req,res,next) =>{
     try{
        const department = await School.findById(req.params.id)
        res.json(department)
     }
     catch(err){
     next(err)
    }
}


export const add_project = async (req,res,next) =>{
        let file = req.file
        let pdf = readFileSync(file.path)
        let encodedPdf =  pdf.toString('base64')
    let project = {
        fileName : file.originalname,
        contentType:file.mimetype,
        base64: encodedPdf,
        projectName: req.body.projectName,
        program: req.body.program,
        year: req.body.year,
        authors: req.body.authors,
        supervisor: req.body.supervisor,
    }
    let newProject = new Project(project)
    try{
    let savedProject = await newProject.save()
    const department = await Department.findById(req.params.id)
    department.projects.push(savedProject)
    await department.save()
    res.json(savedProject)
    } catch(err) {
        next(err)
    }
}

export const get_projects = async (req,res,next) =>{
     try{
        const projects = await Department.findById(req.params.id).populate('projects')
        res.json(projects)
     }
     catch(err){
     next(err)
    }
}

export const edit_project = async (req,res,next) =>{
     try{
        const project = await Project.findByIdAndUpdate(req.params.id,{
            $set: req.body
        },{new: true})
     }
     catch(err){
     res.json(err)
    }
}

export const get_projectss = async (req,res,next) =>{
     try{
        const projects = await Project.find()
        res.json(projects)
     }
     catch(err){
     res.json(err)
    }
}

export const delete_p = async (req,res,next) =>{
     try{
        const p = await Project.findByIdAndDelete(req.params.id)
        res.json('deleted')
     }
     catch(res){
     res.json(res)
    }
}
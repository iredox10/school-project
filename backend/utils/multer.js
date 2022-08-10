import multer from "multer";

const Storage = multer.diskStorage({
    destination: (req,file,cb) =>{
        cb(null, 'uploads')
    },
    filename: (req,file,cb) =>{
        const ext =file.originalname.substr(file.originalname.lastIndexOf('.'))
        cb(null, file.originalname + Date.now() +  '-' + req.fieldname + ext)
    }
})

const storage =multer({storage:Storage})

export default storage


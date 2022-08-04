import multer from "multer";

const Storage = multer.diskStorage({
    destination: (err,req,cb) =>{
        cb(null, 'upload')
    },
    filename: (err,req,cb) =>{
        const ext = req.filename.lastIndexOf('.')
        cb(null, new Date + '-' + req.fieldname + ext)
    }
})

const storage =Storage


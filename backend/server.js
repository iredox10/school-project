import express from 'express'
import mongoose from 'mongoose'
import schoolRoute from './routes/schoolRoute.js'
const app = express()

mongoose.connect('mongodb://localhost/project-app')
.then(res => console.log('connect'))
.catch(err => console.log(err))

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/school',schoolRoute)
app.use('/user',userRoute)

app.use((req,res,err)=>{
    const msg = err.message
    const status = err.status
    const stack = err.stack
    res.json({msg,status,stack})
})


app.listen(5000)
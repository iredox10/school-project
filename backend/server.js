import express from 'express'
import mongoose from 'mongoose'
import schoolRoute from './routes/schoolRoute.js'
const app = express()

mongoose.connect('mongodb://localhost/project-app')
.then(res => console.log('connect'))
.catch(err => console.log(err))

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use('/school',schoolRoute)

app.use((req,res,err)=>{
    res.json(err)
})


app.listen(5000)
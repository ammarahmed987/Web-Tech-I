const express=require('express');
const bodyparser=require('body-parser');
const student=require('./Routes/student.route');
const app=express();
const mongoose=require('mongoose')
mongoose.connect("mongodb://localhost/studentDB",{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log("Connected to the database")
}).catch(err =>{
    console.log("Error"+err)
    process.exit()
})
app.use(bodyparser.json()) 
app.use(bodyparser.urlencoded({extended: true}))


app.use('/student',student)
app.listen(3000,()=>{
    console.log("Server is running on port 3000")
});
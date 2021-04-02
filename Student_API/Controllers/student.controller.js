const Student=require('../Models/student.model');


exports.test=(req,res)=>{
    res.send("Welcome!");

}
exports.student_create=(req,res)=>{
    let student=new Student({
        name: req.body.name,
        age: req.body.age
    })
    student.save((err)=>{
        return next(err)

    }
    )
    res.send("Student Addition Successful")

}
exports.student_update=(req,res)=>{
    
    Student.findByIdAndUpdate(req.params.id, {$set: req.body},(err,product)=>{

        if(err)returnnext(err);
        res.send("Student List Updation Successful")
    })
}

exports.student_delete=(req,res)=>{
    Student.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deletion Successful');
    })

}
exports.student_details=(req,res)=>{
 Student.findById(req.params.id, (err,student)=>{
     if(err)return next(err);
     res.send(student)
 })   
    
}
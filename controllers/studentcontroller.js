const Student= require('../models/student');

async function addStudent(req,res)
{
try{
   console.log(req.body);
   let student=new Student(req.body);
   await student.save();
   res.render('studentinsert')
}
catch(err)
{
console.log(err);
}
}
async function getStudent(req,res) 
{
    try{
        let students=await Student.find({});
        
        res.render('studentlist',
        {
        students:students
        })
     }
     catch(err)
     {
     console.log(err);
     }
}
module.exports ={
    addStudent,
    getStudent
}
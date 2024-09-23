const mongoose =require('mongoose');
const Schema = mongoose.Schema;
const StudentSchema= new Schema({
    firstName: { type: String},
    lastName:{ type : String},
    fatherName: { type: String},
    adharcardNumber: { type: String},
    mobileNo: { type: String}
})

module.exports=mongoose.model('Student', StudentSchema)
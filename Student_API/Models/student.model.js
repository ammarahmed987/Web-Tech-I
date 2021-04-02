const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let StudentSchema = new Schema({
    name: {type: String, required: true, max: 100},
    Age: {type: Number, required: true, max: 100}
})

module.exports= mongoose.model('Student', StudentSchema)
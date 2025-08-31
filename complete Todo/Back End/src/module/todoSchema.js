const mongoose = require('mongoose');

const todoSchema=new mongoose.Schema({
  task:{type:String,required:true},
  date:{type:Date,default:Date.now},
  status:{type:Boolean,default:false},
  createdDate:{type:Date,default:Date.now}
},{timestamps:true});

module.exports=mongoose.model('todo',todoSchema);
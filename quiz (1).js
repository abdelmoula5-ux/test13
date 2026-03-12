const mongoose=require("mongoose")

const QuizSchema=new mongoose.Schema({
  question:String,
  options:[{
    text:String,
    votes:{type:Number,default:0}
  }],
  createdAt:{
    type:Date,
    default:Date.now
  }
})

module.exports=mongoose.model("Quiz",QuizSchema)
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PostSchema = new Schema({
      name:{
        type:String,
        require:true
      },
      dob:{
        type:String,
        require:true
      },
      number:{
        type:Number,
        require:true
      },
      gender:{
        type:String,
        require:true
      },
        role:{
        type:String,
        require:true
      },
      email:{
        type:String,
        require:true
      },
      address:{
        type:String,
        require:true
      },
      experience:{
        type:String,
        require:true
      },
      password:{
        type:String,
        require:true
      },
      token:{
        type:String,
        require:true
      }


});




var Post = mongoose.model("employee", PostSchema);
module.exports = { Post };


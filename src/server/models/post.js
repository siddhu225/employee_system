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


// var PostSchema1= new Schema({
//   header:{
//     type:String,
//     require:true,
//   },
//   body: {
//     type: String,
//     require: true,
//   },
//   toNotifyIds:{
//     type: Array,
//     require: true
//   }
//   isComplete:{
//     type: Boolean,
//     require: true,
//   },

// })

var Post = mongoose.model("employee", PostSchema);
// var Post1= mongoose.model("message",PostSchema1);
module.exports = { Post };


const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
var mongoose = require("mongoose");
var FCM = require('fcm-node');



var serverKey = 'AAAAOeRTQes:APA91bGyykIdeWxBikWC9c8QVmt7IEM8aymmwUMkYmqJTWjfqeV7Ece1vdzcaE0QW5zR5oSVS0zGEKXt2xJdQYMQ34LSPHq6qEt6VN1MK8E2il4mIaWBQaMTjr8ZXf6xmtcdLjssiVxO';
var fcm = new FCM(serverKey);

var nodemailer = require("nodemailer");

var Post = require("../models/post");



const app = express();
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/Employee");
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback) {
  console.log("Connection Succeeded");
});









var message = { 
  to: 'c0wRZEN3ido:APA91bHJG_Ka2u58OFfF4SLImF2nzvTqCyubX0n3E8UDSNr55RWEZW8K-GsVy_d2B514kEFhWAC0S4tB3ecfFQHsg_j8Q8jmhBo33KpDJle_3A15gX5sU75vXCR7c_uSfMKJgepxMVN8', 
  collapse_key: 'your_collapse_key',
  
  notification: {
      title: 'Title of your push notification', 
      body: 'Body of your push notification' 
  },
  
  data: {  //you can send only notification or only data(or include both)
      my_key: 'my value',
      my_another_key: 'my another value'
  }
};

fcm.send(message, function(err, response){
  if (err) {
      console.log("Something has gone wrong!");
  } else {
      console.log("Successfully sent with response: ", response);
  }
});




app.post("/get_token",(req,res)=>{

  console.log("heyy");

  console.log(req.body);
})





app.post("/forgot/password",(req,res) =>{

  Post.findOne({email:req.body.email},function(err,user){

    if (err) {
      console.log("THIS IS ERROR RESPONSE");
      //res.json(err)
    }
    console.log(req.body.password);

    user.password=req.body.password;

    user.save(function(error) {
      if (error) {
        console.log(error);
      }
      res.send({
        success: true
      });
    });

  })

});




app.post("/login", (req, res) => {
  console.log(req.body);

  var username = req.body.email;
  var password = req.body.password;

  Post.findOne({ email: username }, function(err, user) {
    
    // In case the user not found
    if (err) {
      console.log("THIS IS ERROR RESPONSE");
      res.json(err)
    }

    if (user && user.password == password && user.role == "Admin") {
      console.log("i am a admin");
      res.send("admin");
      // res.render(localhost:8080/employees);
    } else if (user && user.password == password && user.role != "admin") {
      console.log(user._id);
      
      res.send(user._id);
    } else {
      console.log("Credentials wrong");
      res.send("not_user")
      //res.json({data: "Login invalid"});
    }
  });
});

app.post("/employee/add", (req, res) => {
  let r = Math.random()
    .toString(36)
    .substring(7);
  var new_post = new Post({
    name: req.body.name,
    dob: req.body.dob,
    gender: req.body.gender,
    number: req.body.number,
    role: req.body.role,
    email: req.body.email,
    address: req.body.address,
    experience: req.body.experience,
    password: r,
  });
  
  Post.find({}, function(error, employees) {
    if (error) {
      console.error(error);
    }
    var ids = [];
    for (let i = 0; i < employees.length; i++) {
      ids.push(employees[i].email);
    }
    console.log(ids);

    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "sumalasai225@gmail.com",
        pass: "siddhu225"
      }
    });

    var mailOptions1 = {
      from: "sumalasai225@gmail.com",
      to: ids,
      subject: "A new Member is added to our team",
      text: "a new member named"+req.body.name+"is added to our team"
    };

    transporter.sendMail(mailOptions1, function(error, info) {
      if (error) {
        console.log(error);
        console.log("heyyy");
      } else {
        console.log("Email sent: " + info.response);
      }
    });



  
  });

  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "sumalasai225@gmail.com",
      pass: "siddhu225"
    }
  });

  var mailOptions = {
    from: "sumalasai225@gmail.com",
    to: req.body.email,
    subject: "Welcome to access design solutions",
    text: "your password is:" + r
  };

  



  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
      console.log("heyyy");
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  new_post.save(function(error) {
    if (error) {
      console.log(error);
    }
    res.send({
      success: true,
      message: "Post saved successfully!"
    });
  });
});

app.get("/employees/view/:id", (req, res) => {
  console.log(req.params.id);
  Post.findById(req.params.id, function(error, employee) {
    if (error) {
      console.error(error);
    }
    console.log(employee);
    res.send(employee);
  });
});

app.get("/employees", (req, res) => {
  Post.find({}, function(error, employees) {
    if (error) {
      console.error(error);
    }
    res.send({
      employees: employees
    });
  }).sort({ _id: -1 });
});

app.get("/employees/:id", (req, res) => {
  Post.findById(req.params.id, function(error, employee) {
    if (error) {
      console.error(error);
    }
    res.send(employee);
  });
});

app.put("/employees/:id", (req, res) => {

  console.log("_________________",req.body.file)

  Post.findById(req.params.id, function(error, employee) {
    if (error) {
      console.error(error);
    }

    (employee.name = req.body.name),
      (employee.dob = req.body.dob),
      (employee.gender = req.body.gender),
      (employee.number = req.body.number),
      (employee.email = req.body.email),
      (employee.address = req.body.address),
      (employee.experience = req.body.experience),
      (employee.password = req.body.password),
      (employee.img=req.body.file),

      

      
      employee.save(function(error) {
        if (error) {
          console.log(error);
        }
        res.send({
          success: true
        });
      });


  });

  Post.find({role:'Admin'},function(error,employee){

    if(error){
      console.log(error)
    }
    
    var ids = [];
      for (let i = 0; i < employee.length; i++) {
        ids.push(employee[i].email);
      }
  
      var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "sumalasai225@gmail.com",
          pass: "siddhu225"
        }
      });
  
      var mailOptions1 = {
        from: "sumalasai225@gmail.com",
        to: ids,
        subject: req.body.name+"is edited his profile",
        text: "A employee"+req.body.name+"is edited his profile"
      };
  
      transporter.sendMail(mailOptions1, function(error, info) {
        if (error) {
          console.log(error);
          console.log("heyyy");
        } else {
          console.log("Email sent: " + info.response);
        }
      });
  
  
  
    
    });
});

app.delete("/employees/:id", (req, res) => {
  
  Post.remove(
    {
      _id: req.params.id
    },

    

    function(err, employee) {
      if (err) res.send(err);
      res.send({
        success: true
      });
    }
  );
  Post.find({}, function(error, employees) {
    if (error) {
      console.error(error);
    }
    var ids = [];
    for (let i = 0; i < employees.length; i++) {
      ids.push(employees[i].email);
    }
    console.log(ids);
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "sumalasai225@gmail.com",
        pass: "siddhu225"
      }
    });


    var mailOptions1 = {
      from: "sumalasai225@gmail.com",
      to: ids,
      subject: "A new Member is added to our team",
      text: "A member is leaving from our team wish him good luck"
    };

    transporter.sendMail(mailOptions1, function(error, info) {
      if (error) {
        console.log(error);
        console.log("heyyy");
      } else {
        console.log("Email sent: " + info.response);
      }
    });
});
});
app.listen(process.env.PORT || 8081);

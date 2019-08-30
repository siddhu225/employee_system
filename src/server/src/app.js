const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
var mongoose = require("mongoose");
var FCM = require("fcm-node");
var serveStatic = require('serve-static');

var serverKey = 'AAAAOeRTQes:APA91bGyykIdeWxBikWC9c8QVmt7IEM8aymmwUMkYmqJTWjfqeV7Ece1vdzcaE0QW5zR5oSVS0zGEKXt2xJdQYMQ34LSPHq6qEt6VN1MK8E2il4mIaWBQaMTjr8ZXf6xmtcdLjssiVxO'; //put your server key here
var fcm = new FCM(serverKey);

var nodemailer = require("nodemailer");

var { Post, Post1 } = require("../models/post");
// var Post1 = require("../models/post");



const app = express();
app.use(morgan("combined"));
app.use(serveStatic(__dirname + "/dist"));

app.use(bodyParser.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/Employee");
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback) {
  console.log("Connection Succeeded");
});











app.post("/forgot/password", (req, res) => {
  Post.findOne({ email: req.body.email }, function(err, user) {
    if (err) {
      console.log("THIS IS ERROR RESPONSE");
      //res.json(err)
    }
    console.log(req.body.password);

    user.password = req.body.password;

    user.save(function(error) {
      if (error) {
        console.log(error);
      }
      res.send({
        success: true
      });
    });
  });
});



app.post("/login", (req, res) => {
  console.log(req.body);

  var username = req.body.email;
  var password = req.body.password;

  var token=req.body.token;

  Post.findOne({ email: username }, function(err, user) {
    
    if (err) {
      console.log("THIS IS ERROR RESPONSE");
      res.json(err);
    }

    if (user && user.password == password && user.role == "Admin") {
      console.log("i am a admin");
      res.send("admin");
    } else if (user && user.password == password && user.role != "admin") {
      console.log(user._id);

      res.send(user._id);
    } else {
      console.log("Credentials wrong");
      res.send("not_user");
    }
  });

  Post.findOne({ email: username }, function(err, user){

    if(err){
      console.log(err);
    }

    user.token=token;

    user.save(function(error){
      if(error){
        console.log(error);
      }
    })
  })
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
    token :undefined
  });

  Post.find({}, function(error, employees) {
    if (error) {
      console.error(error);
    }
    var ids = [];
    for (let i = 0; i < employees.length; i++) {
      ids.push(employees[i].email);
    }

    var ids1=[]

    for (let i = 0; i < employees.length; i++) {
      if(employees[i].token== undefined){
        continue;
      }else{
      ids1.push(employees[i].token);
      }
    }

    var message = {
      registration_ids: ids1,
      
      notification: {
        title: "NEW EMPLOYEE ADDED",
        body: "a new member named   " + req.body.name + "   is added to our team"
       
      }
    };

    

   
  
      fcm.send(message, async function(err, response) {
      if (err) {
        console.log("Something has gone wrong!");
      } else {
        // let toDb = new Post1({
        //   header: message.notification.title,
        //   body: message.notification.body,
        //   toNotifyIds:  ids1,
        //   isComplete: false
        // })
        // toDb.save(function(error) {
        //   if (error) {
        //     console.log(error);
        //     return;
        //   }
        //   console.log('sent!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
        // });
        console.log("Successfully sent with response: ", response);
    }
  });







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
      subject: "NEW MEMBER IS ADDED TO OUR TEAM",
      text: "a new member named   " + req.body.name + "   is added to our team"
    };

    transporter.sendMail(mailOptions1, function(error, info) {
      if (error) {
        console.log(error);
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
    subject: "WELCOME TO ACCESS DESIGN SOLUTIONS",
    text: "YOUR PASSWORD IS:" + r
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
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

  Post.findById(req.params.id, function(error, employee) {
    if (error) {
      console.error(error);
    }

    (employee.name = req.body.name),
      (employee.dob = req.body.dob),
      (employee.role = req.body.role),
      (employee.number = req.body.number),
      (employee.email = req.body.email),
      (employee.address = req.body.address),
      (employee.experience = req.body.experience),
      (employee.password = req.body.password),
      (employee.img = req.body.file),
      employee.save(function(error) {
        if (error) {
          console.log(error);
        }
        if (employee.role == "Admin") {
          res.send("admin");
        } else  {
          res.send(employee._id);
        }
      });
  });

  Post.find({ role: "Admin" }, function(error, employee) {
    if (error) {
      console.log(error);
    }

    var ids = [];
    for (let i = 0; i < employee.length; i++) {
      ids.push(employee[i].email);
    }

    var ids1=[]

    for (let i = 0; i < employee.length; i++) {
      if(employee[i].token== undefined){
        continue;
      }else{
      ids1.push(employee[i].token);
      }
    }
    

    var message = {
      registration_ids: ids1,
      collapse_key: "your_collapse_key",
  
      notification: {
        title: "EMPLOYEE EDITED HIS PROFILE",
        body: req.body.name+"is edited his profile"
      },
  
      data: {
        //you can send only notification or only data(or include both)
        my_key: "my value",
        my_another_key: "my another value"
      }
    };
  
    fcm.send(message, function(err, response) {
      if (err) {
        console.log("Something has gone wrong!");
      } else {
        console.log("Successfully sent with response: ", response);
      }
    });

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
      subject: req.body.name + "IS EDITED HIS PROFILE",
      text: "A employee" + req.body.name + "is edited his profile"
    };

    transporter.sendMail(mailOptions1, function(error, info) {
      if (error) {
        console.log(error);
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

    var ids1=[]

    for (let i = 0; i < employees.length; i++) {
      if(employees[i].token== undefined){
        continue;
      }else{
      ids1.push(employees[i].token);
      }
    }

    var message = {
      registration_ids: ids1,
      collapse_key: "your_collapse_key",
  
      notification: {
        title: "Member is leaving from our company",
        body: "Wish him good luck"
      },
  
      data: {
        my_key: "my value",
        my_another_key: "my another value"
      }
    };
  
    fcm.send(message, function(err, response) {
      if (err) {
        console.log("Something has gone wrong!");
      } else {
        console.log("Successfully sent with response: ", response);
      }
    });
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
      subject: "A MEMBER IS LEAVING FROM OUR COMPANY",
      text: "A member is leaving from our team wish him good luck"
    };

    transporter.sendMail(mailOptions1, function(error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  });
});


app.listen(process.env.PORT || 8081);

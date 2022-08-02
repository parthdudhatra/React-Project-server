const uuid = require('uuid').v4;
const User =  require("../models/user")

let users = [];

//Get all user
exports.getUsers = (req, res, next) => {
    User.find((err, data) => {
        if(err) {
            return next(err);
        }
        else {
            res.json(data)
        }
    })
}

// Add the user
exports.createUser = (req, res, next) => {
    const user = User
    User.create(req.body, (err, data) =>{
        if (err) {
            return next(err);
        } else {
            res.json(data); 
        }
    })  
}

//get one user
exports.getUserById = (req, res ) => {
    User.findById(req.params.id).then((data) => {
        if (data) {
          res.status(200).json(data);
        } else {
          res.status(404).json({ message: "Post not found!" });
        }
      });
    // const singalUser = users.filter((user) => user.id === req.params.id); 
    // res.send(singalUser)
}

// delete user
exports.deleteUser = (req, res ) => {
    User.findByIdAndRemove(req.params.id, (err, data) => {
        if (err) {
          return next(error);
        } else {
          res.status(200).json({
            msg: data,
          });
        }
      });
    // users = users.filter((user) => user.id !== req.params.id);
    // res.send("User delete succefully")
}

//update user
exports.updateUser = (req, res ) => {
    User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        (error, data) => {
          if (error) {
            console.log(error);
          } else {
            res.json(data);
            console.log("Employee updated successfully");
          }
        }
      );
    // const user = users.find((user) => user.id === req.params.id);
    // user.name = req.body.name;
    // user.email = req.body.email;
    // user.contact = req.body.contact
    // res.send("User update succefully")
}

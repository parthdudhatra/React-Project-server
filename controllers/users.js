const uuid = require('uuid').v4

let users = [];

exports.getUsers = (req, res, next) => {
    res.send(users)
}

exports.createUser = (req, res, next) => {
    const user = req.body
    users.push({...user, id : uuid()})
    res.send("User add successfully")
}

exports.getUserById = (req, res ) => {
    const singalUser = users.filter((user) => user.id === req.params.id); 
    res.send(singalUser)
}

exports.deleteUser = (req, res ) => {
    users = users.filter((user) => user.id !== req.params.id);
    res.send("User delete succefully")
}

exports.updateUser = (req, res ) => {
    const user = users.find((user) => user.id === req.params.id);
    user.name = req.body.name;
    user.email = req.body.email;
    user.contact = req.body.contact
    res.send("User update succefully")
}

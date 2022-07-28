const express = require('express');

const {getUsers} = require('../controllers/users');
const {createUser} = require('../controllers/users');
const { getUserById } = require('../controllers/users');
const { deleteUser } = require('../controllers/users');
const { updateUser } = require('../controllers/users')

const router = express.Router();

router.get('/users',getUsers);
router.post('/user', createUser);
router.get('/user/:id', getUserById);
router.delete('/user/:id', deleteUser);
router.put('/user/:id', updateUser);

module.exports = router;

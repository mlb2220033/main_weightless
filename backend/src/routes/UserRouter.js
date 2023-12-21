const express = require("express");
const router = express.Router()
const userController = require('../controllers/UserController');
const {authMiddleWare} = require("../middleware/authMiddleware");
router.post('/register', userController.createUser)
router.post('/login', userController.loginUser)
router.put('/update-user/:id', userController.updateUser)
router.delete('/delete-user/:id', userController.deleteUser)
router.get('/getAll', userController.getAllUser)
router.get('/get-details/:id', userController.getDetailsUser)
module.exports = router
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const User = require('../models/UserModel')
dotenv.config()

const authMiddleWare = (req, res, next) => {
    
    const token = req.headers.token.split(' ')[1]
    jwt.verify(token, process.env.ACCESS_TOKEN, function (err, decoded) {
        if (err) {
            return res.status(404).json({
                message: 'The authemtication',
                status: 'ERROR'
            })
        }
        const {payload} = User
        if (payload?.isAdmin) {
            next()
        } else {
            return res.status(404).json({
                message: 'The authemtication',
                status: 'ERROR'
            })
        }
        console.log('user', User)
    });
}

module.exports = {
    authMiddleWare
}
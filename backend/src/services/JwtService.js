const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config()

const genneralAccessToken = async (payload) => {
    const access_token = jwt.sign({
        payload
    }, 'access_token', { expiresIn: '35s' })

    return access_token
}

const genneralRefreshToken = async (payload) => {
    const refresh_token = jwt.sign({
        payload
    }, 'refresh_token', { expiresIn: '365d' })

    return refresh_token
}

const refreshTokenJwtService = (token) => {
    return new Promise((resolve, reject) => {
    try {
        //console.log('token', token)
        jwt.verify(token, refresh_token,(err, user) => {
            if (err) {
                resolve({
                    status: 'ERR',
                    message: 'The authemtication'
                })
            }
            console.log('user', user)
        })
        resolve({
            status: 'OK',
            message: 'SUCESS',
        })
        
    } catch (e) {
        reject(e)
    }

    })
}
module.exports = {
    genneralAccessToken,
    genneralRefreshToken,
    refreshTokenJwtService,
}
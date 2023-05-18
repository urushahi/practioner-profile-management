const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const generateToken = (userId) => {
    const payload = {
        userId
    };
    const token = jwt.sign(
        payload,
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: '1h'
        }
    );

    return token;
}

const generateRefreshToken = (userId) => {
    const payload = {
        userId
    };
    const token = jwt.sign(
        payload,
        process.env.REFERSH_TOKEN_SECRET,
        {
            expiresIn: '1h'
        }
    );
    return token
};

const checkPassword = async (cryptedPassword, nonCryptedPassword) => {
    try {
        const passwordMatch = await bcrypt.compare(nonCryptedPassword, cryptedPassword);
        if (!passwordMatch) {
            throw new Error("Password donot match")
        }
    } catch (err) {
        throw err;
    }
}

module.exports = {
    generateRefreshToken,
    generateToken,
    checkPassword
}
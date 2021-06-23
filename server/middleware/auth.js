const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
    const token = req.header('x-auth-token');
    if (!token) {
        return res.status(401).send('access denied, No token provided');
    }
    try {
        const decoded = jwt.verify(token, process.env.jwtPrivteKey);
        req.user = decoded;
        next()
    } catch (e) {
        res.status(400).send('invalid token')
    }
}
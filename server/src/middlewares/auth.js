const jwt = require('jwt-simple');

class AuthMiddleware {
    checkAuth (req, res, next) {
        if (!req.headers.authorization || req.headers.authorization === 'null') {
            return res
                .status(401)
                .send({ message: 'Not authorized' });
        }

        const token = req.headers.authorization.split(' ')[1];
        const payload = jwt.decode(token, process.env.SERVER_SECURITY);

        req.user = payload.email;

        next()
    }
}

module.exports = new AuthMiddleware();
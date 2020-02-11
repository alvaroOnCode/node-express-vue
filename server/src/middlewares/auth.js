const jwt = require('jwt-simple');

class AuthMiddleware {
    checkAuth (req, res, next) {
        if (!req.headers.authorization) {
            return res
                .status(403)
                .send({ message: 'No authorized' });
        }

        const token = req.headers.authorization.split(' ')[1];
        const payload = jwt.decode(token, process.env.SERVER_SECURITY);

        next();
    }
}

module.exports = new AuthMiddleware();
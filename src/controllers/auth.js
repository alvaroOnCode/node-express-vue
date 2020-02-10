const jwt = require('jwt-simple');

class AuthController {
    token(req, res, next) {
        console.log('token:', req.body);

        if (!req.body.email) {
            return res
                .status(201)
                .send({ error: 'Email required.' });
        }

        const payload = {
            email: req.params.email
        };

        return res
            .status(200)
            .send({
                token: jwt.encode(
                    payload,
                    process.env.SERVER_SECURITY
                )
            });
    }
}

module.exports = new AuthController();
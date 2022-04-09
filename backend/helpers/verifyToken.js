const jwt = require('jsonwebtoken');

verifyToken = (req, res, next) => {
    const authHeader = req.headers.token;

    if (authHeader) {
        const token = authHeader.split(" ")[1];

        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) res.status(403).json("Token is not valid!");

            req.user = user;
            next();
        });
    } else {
        res.status(401).json("You're not authenticated.")
    }
}

verifyTokenAndAuthorization = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.headers.uid != undefined) {
            uid = req.headers.uid;

            if (req.user.id === uid && req.user.isAdmin) {
                next();
            } else {
                res.status(403).json("You're not allowed to do that.")
            }
        } else {
            res.status(403).json("Missing user id.")
        }
    })
}

module.exports = { verifyToken, verifyTokenAndAuthorization };

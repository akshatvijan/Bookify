const jwt = require("jsonwebtoken");

const jwtSecret = process.env.JWT_SECRET_KEY

const verifyAdminToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(" ")[1];
    if (!token) {
        return res.status(401).send({ message: "Access Denied. No token provided" });
    }
    jwt.verify(token, jwtSecret, (err, user) => {
        if (err) {
            return res.status(403).send({ message: "Invalid credentials" });
        }
        if (user.role !== 'admin') {
            return res.status(403).send({ message: "Access Denied. Admin only" });
        }
        req.user = user;
        next();
    });
};

module.exports = verifyAdminToken
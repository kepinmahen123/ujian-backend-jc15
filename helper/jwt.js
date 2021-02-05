const jwt = require("jsonwebtoken")

const createJWTToken = (payload) => {
  return jwt.sign(payload, "kevin", {
    expiresIn: "24h",
  });
};

const checkToken = (req, res, next) => {
  if(req.method !== "OPTIONS") {
    jwt.verify(req.token, "kevin", (err, decoded) => {
      if(err) {
        return res.status(401).send({
          message: err.message,
          status: "Unauthorized",
        });
      };
      req.user = decoded;
      next();
    });
  };
};

module.exports = {createJWTToken, checkToken}
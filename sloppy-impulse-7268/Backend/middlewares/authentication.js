const jwt = require('jsonwebtoken');
require("dotenv").config();

const authentication = (req, res, next) => {
  
    if(!req.headers.authorization){
        // Read about status codes here - https://restfulapi.net/http-status-codes/ 
        return res
          .status(401)
          .send({ error: "Authorization header was missing" });
    }
    const user_token = req.headers.authorization.split(" ")[1]
    jwt.verify(user_token, process.env.SECRETKEY, function (err, decoded) {
      if (err) {
        return res
          .status(401)
          .send({ error: "Error ocuured during authentication" });
      }
      // console.log(decoded);
      // Instead of adding the requesting user's information to the body, it should be added on a new
      // 'user' field on the request so it does not interfere with the request body.
      req.body.email = decoded.email;
      req.body.userId = decoded.userId;
      next();
    });
}

module.exports = authentication
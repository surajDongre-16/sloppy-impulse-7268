const jwt = require('jsonwebtoken');
require("dotenv").config();

const authentication = (req, res, next) => {
    console.log(req.headers,"reqHead")
    if(!req.headers.authorization){
        return res.send("Please login again")
    }
    const user_token = req.headers.authorization.split(" ")[1]
    jwt.verify(user_token, process.env.SECRETKEY, function (err, decoded) {
      if (err) {
        return res.send("Please login againn");
      }
      console.log(decoded);
      req.body.email = decoded.email;
      req.body.userId = decoded.userId;
      next();
    });
}

module.exports = authentication
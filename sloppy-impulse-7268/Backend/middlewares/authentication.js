const jwt = require('jsonwebtoken');
require("dotenv").config();

const authentication = (req, res, next) => {
    // Such logging messages don't help. I'm guessing it was added for debugging purposes but never removed.
    console.log(req.headers,"reqHead")
    if(!req.headers.authorization){
        // This is not a good way to return error responses. APIs should conform to REST principles.
        // All error response should be formatted in a certain way so that the client knows what to expect.
        // A proper json object with error message and any other relevant information must be sent back
        // with an appropriate status code. For authentication issues status code 401 should be used.
        // Read about status codes here - https://restfulapi.net/http-status-codes/ 
        // It should be something like -
        // res.status(401).send({ error: "Authorization header was missing" });
        // Same applies below. Using the same error message doesn't help identify what the client end
        // issue was.
        return res.send("Please login again")
    }
    const user_token = req.headers.authorization.split(" ")[1]
    jwt.verify(user_token, process.env.SECRETKEY, function (err, decoded) {
      if (err) {
        return res.send("Please login againn");
      }
      console.log(decoded);
      // Instead of adding the requesting user's information to the body, it should be added on a new
      // 'user' field on the request so it does not interfere with the request body.
      req.body.email = decoded.email;
      req.body.userId = decoded.userId;
      next();
    });
}

module.exports = authentication
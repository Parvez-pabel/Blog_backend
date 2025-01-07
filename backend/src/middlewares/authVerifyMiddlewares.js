const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  let Token = req.headers["token-key"];
  jwt.verify(Token, "abcd123456", (err, decoded) => {
    if (err) {
      res.status(401).send({
        message: "Unauthorized Access",
        data: err,
      });
    } else {
      //get user from decoded token and add with user header
      let UserName = decoded["data"]["UserName"];
      req.headers.UserName = UserName;
      next();
    }
  });
};

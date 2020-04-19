const jwt = require("jsonwebtoken");
const config = require("config");

const auth = (req, res, next) => {

   const token = req.header("x-auth-token");

   if(!token) {
      return res.status(401).json({msg: "User not authorized"});
   }

   try {
      const decoded = jwt.verify(token, config.get("jwtSecret"));
      req.user = decoded.user;
      next();
   } catch (error) {
      res.status(401).json({msg: "Token not valid"});
   }
};


module.exports = auth;
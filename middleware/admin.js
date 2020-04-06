const config=require('config')

module.exports = function(req, res, next) {
  // 401 Unauthorized
  // 403 Forbidden
   if (!config.get("requiresAuth")) return next();

  if (!req.user.isAdmin) return res.status(403).json({status:"failure",message:"Access denied."});

  next();
};
const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const token = req.header('authorization');





  if (!token) return res.status(401).json({ message: "Acces non dispo" });


try {
    const decoded = jwt.verify(token, ''); 
    req.user = decoded;
    next();}


 catch (error) {
    console.error(error);
    res.status(401).json({ message: 'invalid token' });
  }
};

module.exports = verifyToken;



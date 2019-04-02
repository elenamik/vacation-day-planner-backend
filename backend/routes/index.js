var express = require('express');
var router = express.Router();
const userController=require('../controllers/userController');
const authController=require('../controllers/authController');
const passport=require('passport');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.send({success:true});
});

router.post('/login', 
  authController.validateLogin,
  authController.login
);

router.post('/register', 
  authController.validateLogin,
  userController.register,
  authController.login
);

router.post('/logout',
  authController.logout
);

module.exports = router;

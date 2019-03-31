var express = require('express');
var router = express.Router();
const userController=require('../controllers/userController');
const authController=require('../controllers/authController');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.send({success:true});
});

router.post('/login', userController.login);
router.post('/register', authController.validateLogin,userController.register);

module.exports = router;

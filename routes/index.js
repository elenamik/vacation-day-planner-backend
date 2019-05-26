var express = require('express');
var router = express.Router();
const userController=require('../controllers/userController');
const authController=require('../controllers/authController');
const dataController=require('../controllers/dataController');
const configController=require('../controllers/configController');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.send({success:true});
});

router.post('/login', 
  authController.validateLogin,
  authController.authenticate,
  dataController.fetchUserData,
  userController.returnUser
);

router.post('/register', 
  authController.validateLogin,
  userController.register,
  dataController.generateDefaultData,
  userController.returnUser
);

router.post('/logout',
  authController.logout
);

router.post('/updateEvents',dataController.updateEvents);
router.post('/updateWeeklyDaysOff',configController.updateWeeklyDaysOff);
router.post('/updateVacationDays',configController.updateVacationDays);
router.post('/updateHolidays',configController.updateHolidays);
router.post('/createFirstUser',userController.createFirstUser);

router.get('/testApp',dataController.test)

module.exports = router;

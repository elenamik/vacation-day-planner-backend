const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

/* ----------------- error handling -----------------
const { catchErrors } = require('../handlers/errorHandlers');
usage:
router.get('/', catchErrors(Controller.getData));
----------------- end of error handling ----------------- */

router.get('/getUsers', userController.getUsers);
router.get('/addUser/:name', userController.addUser);
router.get('/getUserInfo/:name',userController.getUserInfo)

router.post('/updateEvents/',userController.updateEvents)

module.exports = router;


var express = require('express');
var router = express.Router();
const Controller = require('../userController');

function wrap(func) {
  return async (req, res, next) => {
      try {
          await func(req, res, next);
      } catch (error) {
          console.error(error);
          res.send(error);
      }
  };
}
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup',Controller.authController.singup);
router.post('/signin',Controller.authController.signin);
router.post('/test',Controller.authController.testEmail)

module.exports = router;

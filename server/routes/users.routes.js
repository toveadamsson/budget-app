const router = require('express').Router();
const controller = require('../controllers/users.controllers');

router.post('/register', controller.register);
router.post('/login', controller.login);
router.post('/verify_token', controller.verify_token);
router.delete("/deleteaccount", controller.deleteaccount);
module.exports = router;

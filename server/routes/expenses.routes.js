const router = require('express').Router();
const controller = require('../controllers/expenses.controllers');

router.post('/add', controller.add);
router.get('/get', controller.get)
// router.post('/edit', controller.edit);
// router.post('/delete', controller.delete)
// router.post('/verify_token', controller.verify_token);


module.exports = router;

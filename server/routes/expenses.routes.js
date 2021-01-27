const router = require('express').Router();
const controller = require('../controllers/expenses.controllers');

router.post('/add', controller.add);
router.get('/get', controller.get)
router.delete('/remove/:_id', controller.remove)
// router.post('/edit', controller.edit);

// router.post('/verify_token', controller.verify_token);


module.exports = router;

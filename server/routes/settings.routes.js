const router = require("express").Router();
const settingsController = require("../controllers/settings.controllers");

router.post("/change", controller.change);
router.post("/deleteaccount", controller.deleteaccount);
router.post("/logout", controller.logout);
router.post("/verify_token", controller.verify_token);

module.exports = router;

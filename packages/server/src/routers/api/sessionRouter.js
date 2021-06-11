const router = require("express").Router();
const sessionController = require("../../controllers/sessionController");


router.post('/login',sessionController.login);
router.post('/refreshToken',sessionController.refresh)



module.exports = router;
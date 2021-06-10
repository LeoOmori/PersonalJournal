const router = require("express").Router();

//All routers
const userRouter = require('./userRouter');
const sessionRouter = require('./sessionRouter');




/////user routers
router.use(userRouter);
router.use(sessionRouter);



module.exports = router;
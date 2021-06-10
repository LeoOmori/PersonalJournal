const router = require("express").Router();

//All routers
const userRouter = require('./userRouter');




/////user routers
router.use(userRouter);



module.exports = router;
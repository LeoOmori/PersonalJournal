const router = require("express").Router();

//All routers
const userRouter = require('./userRouter');
const sessionRouter = require('./sessionRouter');
const entryRouter = require('./entryRouter');




/////user routers
router.use(userRouter);
router.use(sessionRouter);
router.use(entryRouter);



module.exports = router;
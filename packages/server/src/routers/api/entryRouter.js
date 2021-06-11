const router = require("express").Router();
const entryController = require("../../controllers/entryController");

const auth = require('../../../middlewares/authorization');


router.get('/entry/', auth ,entryController.index);
router.get('/entry/:entryId', auth ,entryController.show);
router.post('/entry', auth ,entryController.store);

module.exports = router;
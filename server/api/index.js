const router = require('express').Router();
module.exports = router;

router.use('/tb', require('./tb'));
router.use('/tp', require('./tp'));

router.use((req, res, next) => {
    const error = new Error();
    error.status = 404;
    next(error);
})
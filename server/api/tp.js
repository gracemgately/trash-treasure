const router = require('express').Router();
//TBD --> import info from dropship company
module.exports = router;

router.get('/', (req, res, next) => {
    res.json('ALL TP HERE')
})
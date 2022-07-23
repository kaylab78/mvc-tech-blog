const router = require('express').Router();

router.get('/', (req, res) => {
    // Specify which template to use.
    res.render('homepage');
});

module.exports = router;
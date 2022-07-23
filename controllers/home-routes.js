const router = require('express').Router();

router.get('/', (req, res) => {
    // Specify which template to use.
    res.render('homepage', {
        id: 1,
        post_body: "This is the first time I've used Handlebars.js.",
        title: "Handlebar.js",
        created_at: new Date(),
        comments: [{}, {}],
        user: {
            username: 'newwebdev'
        }
    });
});

module.exports = router;
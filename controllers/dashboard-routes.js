const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

// GET /
router.get('/', (req, res) => {
    // loggedIn is hardcoded as true because the user can't get to the dashboard unless they're logged in per boot camp module 14.5.3
    res.render('dashboard', { loggedIn: true });
});

module.exports = router;
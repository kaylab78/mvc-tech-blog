const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

// GET all posts
router.get('/', (req, res) => {
    Post.findAll({
        attributes: ['id', 'title', 'created_at'],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        
        .then(dbPostData => {
            // .get({ plain: true }) is the Sequelize method used to serialize the object down to only the necessary properties.
            const posts = dbPostData.map(post => post.get({ plain: true }));

            res.render('homepage', { posts });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// GET /login
router.get('/login', (req, res) => {
    res.render('login');
});

module.exports = router;
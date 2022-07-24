const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

// GET /dashboard
router.get('/', withAuth, (req, res) => {
    const userId = req.session.user_id;

    Post.findAll({
        where: {
            user_id: userId
        },
        attributes: ['id', 'title', 'post_body', 'created_at'],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbPostData => {
            // Serialize data before passing to template
            const posts = dbPostData.map(post => post.get({ plain: true }));
            // loggedIn is hardcoded as true because the user can't get to the dashboard unless they're logged in per boot camp module 14.5.3
            res.render('dashboard', { posts, loggedIn: true });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;
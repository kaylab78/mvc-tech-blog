const router = require('express').Router();
const { Post, User } = require('../../models');

// GET /api/posts
router.get('/', (req, res) => {
    Post.findAll({
        attributes: ['id', 'post_url', 'title', 'created_at'],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// GET /api/posts/1
router.get('/:id', (req, res) => {
    const postId = req.params.id;

    Post.findOne({
        where: {
            id: postId
        },
        attributes: ['id', 'post_url', 'title', 'created_at'],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: "We can't find a post with this id." });
                return;
            }
            res.json(dbPostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// POST /api/posts
router.post('/', (req, res) => {
    const title = req.body.title;
    const postUrl = req.body.post_url;
    const userId = req.body.user_id;

    /* JSON body
    {
        "title" : "Article Title",
        "post_url" : "https://google.com",
        "user_id" : 1
    }
    */
   Post.create({
    title: title,
    post_url: postUrl,
    user_id: userId
   })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// PUT /api/posts/1 
// Updates post title
router.put('/:id', (req, res) => {
    const postTitle = req.body.title;
    const postId = req.params.id;

    Post.update(
        {
            title: postTitle
        },
        {
            where: {
                id: postId
            }
        }
    )
        .then(dbPostData => {
            if(!dbPostData) {
                res.status(404).json({ message: "We can't find a post with this id." });
                return;
            }
            res.json(dbPostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// DELETE /api/posts/1
router.delete('/:id', (req, res) => {
    const postId = req.params.id;

    Post.destroy({
        where: {
            id: postId
        }
    })
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: "We can't find a post with this id" });
                return;
            }
            res.json(dbPostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;
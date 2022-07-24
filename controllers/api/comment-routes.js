const router = require('express').Router();
const { Comment } = require('../../models');

// GET /api/comments
router.get('/', (req, res) => {
    Comment.findAll()
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// POST /api/comments
router.post('/', (req, res) => {
    // Check the session
    if (req.session) {
        const commentText = req.body.comment_text;
        const userId = req.session.user_id;
        const postId = req.body.post_id;

        /* JSON body
        {
            "comment_text" : "This is a comment.",
            "user_id" : 1,
            "post_id" : 1
        }
        */
        Comment.create({
            comment_text: commentText,
            user_id: userId,
            post_id: postId
        })
            .then(dbCommentData => res.json(dbCommentData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    }
});

// DELETE /api/comments/1
router.delete('/:id', (req, res) => {
    const commentId = req.params.id;

    Comment.destroy({
        where: {
            id: commentId
        }
    })
        .then(dbCommentData => {
            if (!dbCommentData) {
                res.status(404).json({ message: "We can't find a comment witht this id." });
                return;
            }
            res.json(dbCommentData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;
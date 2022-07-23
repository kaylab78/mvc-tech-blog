const router = require('express').Router();
const { Comment } = require('../../models');

// GET /api/comments
router.get('/', (req, res) => {

});

// POST /api/comments
router.post('/', (req, res) => {
    const commentText = req.body.comment_text;
    const userId = req.body.user_id;
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
});

// DELETE /api/comments/1
router.delete('/:id', (req, res) => {

});

module.exports = router;
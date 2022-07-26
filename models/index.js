const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// User.hasMany(Post, {
//     foreignKey: 'user_id'
// });

// A post can only have one user, but a user can have many posts
Post.belongsTo(User, {
    foreignKey: 'user_id',
});

// A comment can only have one user, but a user can have many comments
Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

// A post can have many comments, but a comment can only belong to one post
Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

module.exports = { User, Post, Comment };
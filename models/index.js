const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// A user can have many posts
User.hasMany(Post, {
    foreignKey: 'user_id'
});

// A post can only have one user
Post.belongsTo(User, {
    foreignKey: 'user_id',
});

// A comment can only have one user
Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

// A comment can only belong to one post
Comment.belongsTo(User, {
    foreignKey: 'post_id'
});

// A user can have many comments
User.hasMany(Comment, {
    foreignKey: 'user_id'
});

// A post can have many comments
Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

module.exports = { User, Post, Comment };
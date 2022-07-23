const User = require('./User');
const Post = require('./Post');

// A user can have many posts
User.hasMany(Post, {
    foreignKey: 'user_id'
});

// A post can only have one user
Post.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User, Post };
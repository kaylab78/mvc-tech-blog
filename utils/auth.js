const withAuth = (req, res, next) => {
    // Checks for exisitence of session property
    if (!req.session.user_id) {
        // Redirect user to login page if they're not logged in
        res.redirect('/login');
    } else {
        next();
    }
};

module.exports = withAuth;
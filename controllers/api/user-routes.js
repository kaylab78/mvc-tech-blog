const router = require('express').Router();
const { User } = require('../../models');

// GET /api/users
router.get('/', (req, res) => {
    User.findAll({
        attributes: { exclude: ['password'] }
    })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// GET /api/users/1
router.get('/:id', (req, res) => {
    const userId = req.params.id;

    User.findOne({
        attributes: { exclude: ['password'] },
        where: {
            id: userId
        }
    })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// POST /api/users
router.post('/', (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    /* JSON body
    {
        "username" : "newwebdev1",
        "email" : "email@example.com",
        "password" : "password1"
    }
    */
   User.create({
    username: username,
    email: email,
    password: password
   })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// POST /api/login
router.post('/login', (req, res) => {
    const email = req.body.email
    /* JSON body
    {
        "email" : "newemail@example.com"
        "password" : "password1"
    }
    */
   User.findOne({
        where: {
            email: email
        }
   })
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(400).json({ message: "We can't find that email address." });
            return;
        }
        res.json({ user: dbUserData });
    });
});

// PUT /api/users/1
router.put('/:id', (req, res) => {
    const userId = req.params.id;

    /* JSON body
    {
        "username" : "newwebdev1",
        "email" : "email@example.com",
        "password" : "password2"
    }
    */
   User.update(req.body, {
    individualHooks: true,
    where: {
        id: userId
    }
   })
    .then(dbUserData => {
        if (!dbUserData[0]) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// DELETE /api/users/1
router.delete('/:id', (req, res) => {
    const userId = req.params.id;

    User.destroy({
        where: {
            id: userId
        }
    })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;
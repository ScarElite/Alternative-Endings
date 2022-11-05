const router = require('express').Router();
const { UserController } = require('../../controllers');

const isAuthenticated = require('../../middleware/isAuthenticated');

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.post('/logout', isAuthenticated, UserController.logout);

module.exports = router; //change

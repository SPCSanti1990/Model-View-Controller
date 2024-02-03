const router = require('express').Router();
const postRouts = require('./post-routes');
const commentRouts = require('./comment-routes');
const userRouts = require('./user-routes');

router.use('/posts', postRouts);
router.use('/comments', commentRouts);
router.use('/users', userRouts);

module.exports = router;
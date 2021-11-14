const router = require('express').Router();
const postController = require('../controller/post.controller');

const auth = require('../middleware/auth')
const multer = require('../middleware/multer.config');

router.post('/',auth,multer, postController.createPost);
router.delete('/:id',auth, postController.deleteOnePost);
router.put('/update/:id', auth, multer, postController.update);

module.exports = router;
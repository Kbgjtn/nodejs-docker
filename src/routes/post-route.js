const { Router } = require("express");
const { get } = require("mongoose");

router = Router();

const postController = require("../controllers/post-controller");

router
    .route("/")
    .get(postController.getAllPosts)
    .post(postController.createPost);

router
    .route("/:id")
    .get(postController.getPost)
    .patch(postController.updatePost)
    .delete(postController.deletePost);

module.exports = router;

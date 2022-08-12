const Post = require("../models/post-models");

exports.getAllPosts = async (req, res, next) => {
    try {
        const posts = await Post.find();
        res.status(200).json({
            success: true,
            results: posts.length,
            data: {
                posts,
            },
        });
    } catch (error) {
        console.log(error?.message);
        res.status(400);
    }
};

exports.getPost = async (req, res, next) => {
    try {
        const post = await Post.findById({ _id: req.params.id });
        res.status(200).json({
            success: true,
            data: {
                post,
            },
        });
    } catch (error) {
        console.log(error?.message);
        res.status(400);
    }
};

exports.createPost = async (req, res, next) => {
    try {
        const post = await Post.create({
            title: req.body.title,
            body: req.body.body,
        });

        res.status(200).json({
            success: true,
            data: {
                post,
            },
        });
    } catch (error) {
        console.log(error?.message);
        res.status(400);
    }
};

exports.updatePost = async (req, res, next) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });

        res.status(200).json({
            success: true,
            data: {
                post,
            },
        });
    } catch (error) {
        console.log(error?.message);
        res.status(400);
    }
};

exports.deletePost = async (req, res, next) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);

        res.status(200).json({
            success: true,
        });
    } catch (error) {
        console.log(error?.message);
        res.status(400).json({
            success: false,
        });
    }
};

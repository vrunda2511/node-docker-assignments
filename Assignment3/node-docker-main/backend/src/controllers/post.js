import fs from 'fs';
import path from 'path';
import Post from '@app/models/post';
import User from '@app/models/user';
import { getAll } from '@app/services/user';
import { createOnepost, getPostbyId, updatePostbyId, deletePostbyId, getAlll } from '@app/services/post';

const clearImage = filePath => {
  let fP = filePath;
  fP = path.join(__dirname, '..', filePath);
  // eslint-disable-next-line security/detect-non-literal-fs-filename
  fs.unlink(fP, err => console.log(err));
};

const getPosts = async (req, res, next) => {
 
  try {
    const totalItems = await Post.find().countDocuments();
    const posts = await getAlll(req);
    res.status(200).json({
      message: 'posts fetched',
      posts: posts,
      totalItems: totalItems
    });
  }
  catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

const createPost = async (req, res, next) => {
  try {
    console.log("helo")
    const posts = await createOnepost(req);
    res.status(201).json({
      message: 'Post created successfully!',
      posts
    });
  }
  catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

const getPost = async (req, res, next) => {
  const postId = req.params.postId;
  const post = await getPostbyId(postId);
  try {
    if (!post) {
      const error = new Error('Could not find post.');
      error.statusCode = 404;
      throw error;
    }
    console.log(res.status)
    res.status(200).json({ message: 'Post fetched.', post });
  }
  catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

const updatePost = async (req, res, next) => {
  
  try {
    const result = await updatePostbyId(req);
   
    res.status(200).json({ message: 'Post updated!', post: result });
  }
  catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

const deletePost = async (req, res, next) => {
 

    try {
      console.log("delete")
      const post = await deletePostbyId(req);
    res.status(200).json({ message: 'Deleted post.' });
  }
  catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};


export {
  getPosts,
  createPost,
  getPost,
  updatePost,
  deletePost,
};
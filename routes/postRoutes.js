const express = require('express');
const { getPosts, getPostById, createPost, updatePost, deletePost } = require('../controller/postController');

const router = express.Router();

router.get('/', getPosts);          // 전체 게시글 조회
router.get('/:id', getPostById);    // 특정 게시글 조회
router.post('/', createPost);       // 게시글 작성
router.post('/:id', updatePost);    // 게시글 수정
router.delete('/:id', deletePost);  // 게시글 삭제

module.exports = router;
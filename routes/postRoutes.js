const express = require('express');
const { getPosts, getPostById, createPost, createForm, updatePost, deletePost } = require('../controller/postController');

const router = express.Router();

router.get('/form', createForm);    // 글쓰기 페이지 (get 요청)
router.get('/', getPosts);          // 전체 게시글 조회
router.get('/:id', getPostById);    // 특정 게시글 조회
router.post('/', createPost);       // 게시글 작성
router.post('/:id', updatePost);    // 게시글 수정
router.delete('/:id', deletePost);  // 게시글 삭제

module.exports = router;
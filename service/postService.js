const postModel = require('../model/postModel');

// 전체 게시글 조회
exports.getAllPosts = async () => {
    return await postModel.findAll();
};

// 특정 게시글 조회
exports.getPostById = async (id) => {
    return await postModel.findById(id);
};

// 게시글 생성
exports.createPost = async (post) => {
    return await postModel.create(post);
};

// 게시글 수정
exports.updatePost = async (id, post) => {
    return await postModel.update(id, post);
};

// 게시글 삭제
exports.deletePost = async (id) => {
    return await postModel.delete(id);
};

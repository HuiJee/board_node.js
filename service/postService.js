const postModel = require('../model/postModel');
const bcrypt = require('bcrypt');

// 전체 게시글 조회
// exports.getAllPosts = async () => {
//     return await postModel.findAll();
// };

exports.getAllPosts = async () => {
    try {
        return await postModel.findAll();
        // return posts;
    } catch (err) {
        throw new Error('Error fetching posts from database');
    }
};

// 특정 게시글 조회
exports.getPostById = async (id) => {
    try {
        return await postModel.findById(id);
    } catch (err) {
        throw new Error('Error fetching posts from database');
    }
};

// 게시글 생성
exports.createPost = async (post) => {
    // 비밀번호 해싱
    post.password = await bcrypt.hash(post.password, 10);
    console.log('비밀번호 : ', post.password);

    // 모델의 create 메서드 호출
    try {
        return await postModel.create(post);
        // return result;
    } catch (err) {
        throw new Error('게시글 저장 실패');
    }
};


// 게시글 수정
exports.updatePost = async (id, post) => {
    post.password = await bcrypt.hash(post.password, 10);

    try {
        return await postModel.update(id, post);
    } catch (err) {
        throw new Error('게시글 저장 실패');
    }
};

// 게시글 삭제
exports.deletePost = async (id) => {
    try {
        return await postModel.delete(id);
    } catch (err) {
        throw new Error('게시글 삭제 실패');
    }
};

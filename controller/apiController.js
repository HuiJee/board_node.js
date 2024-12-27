// // 페이지 이동까지가 아닌 단순 api만 필요한 경우
//
// const postService = require('../service/postService');
//
// // 모든 게시글 조회
// exports.getPosts = async (req, res) => {
//     const posts = await postService.getAllPosts();
//     res.json(posts);
// };
//
// // 특정 게시글 조회
// exports.getPostById = async (req, res) => {
//     const { id } = req.params;
//     const post = await postService.getPostById(id);
//     if (!post) {
//         return res.status(404).json({ error: 'Post not found' });
//     }
//     res.json(post);
// };
//
// // 게시글 생성
// exports.createPost = async (req, res) => {
//     const { title, content } = req.body;
//     const newPost = await postService.createPost({ title, content });
//     res.status(201).json(newPost);
// };
//
// // 게시글 수정
// exports.updatePost = async (req, res) => {
//     const { id } = req.params;
//     const { title, content } = req.body;
//     const updatedPost = await postService.updatePost(id, { title, content });
//     if (!updatedPost) {
//         return res.status(404).json({ error: 'Post not found' });
//     }
//     res.json(updatedPost);
// };
//
// // 게시글 삭제
// exports.deletePost = async (req, res) => {
//     const { id } = req.params;
//     const deleted = await postService.deletePost(id);
//     if (!deleted) {
//         return res.status(404).json({ error: 'Post not found' });
//     }
//     res.status(204).end();
// };

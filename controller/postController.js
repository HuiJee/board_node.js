const postService = require('../service/postService');

// 모든 게시글 조회
exports.getPosts = async (req, res) => {
    console.log('전체 게시글 조회!');
    try {
        const posts = await postService.getAllPosts();
        res.render('posts', { posts });  // EJS 템플릿에 데이터 전달
    } catch (err) {
        console.error(err);
        res.status(500).send('Database error');
    }
};

// 특정 게시글 조회
exports.getPostById = async (req, res) => {
    console.log('특정 게시글 조회!');
    try {
        const { id } = req.params;
        const post = await postService.getPostById(id);
        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }
        res.render('postDetail', { post });
    } catch (err) {
        console.error(err);
        res.status(500).send('Database error');
    }
};

// 게시글 생성

// 글쓰기 페이지 (GET)
exports.createForm = (req, res) => {
    console.log('작성 페이지!');
    res.render('postWrite');
};

// 게시글 작성 (POST)
exports.createPost = async (req, res) => {
    const { title, content, nick, password } = req.body;

    if (!title || !content || !nick || !password) {
        return res.status(400).json({ message: '모든 필드를 입력해주세요.' });
    }

    try {
        const result = await postService.createPost({title, content, nick, password});
        res.redirect('/posts');  // 게시글 목록 페이지로 리다이렉트
    } catch (err) {
        res.status(500).send('게시글 저장 오류');
    }
};

// 게시글 수정
exports.updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    const updatedPost = await postService.updatePost(id, { title, content });
    if (!updatedPost) {
        return res.status(404).json({ error: 'Post not found' });
    }
    res.json(updatedPost);
};

// 게시글 삭제
exports.deletePost = async (req, res) => {
    const { id } = req.params;
    const deleted = await postService.deletePost(id);
    if (!deleted) {
        return res.status(404).json({ error: 'Post not found' });
    }
    res.status(204).end();
};

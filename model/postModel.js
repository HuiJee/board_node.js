const db = require('../config/dbConfig');

exports.findAll = async () => {
    const [rows] = await db.promise().query('SELECT * FROM posts');
    return rows;
};

exports.findById = async (id) => {
    const [rows] = await db.promise().query('SELECT * FROM posts WHERE id = ?', [id]);
    return rows[0];
};

exports.create = async ({ title, content }) => {
    const [result] = await db.promise().query('INSERT INTO posts (title, content, created_at) VALUES (?, ?, NOW())', [title, content]);
    return { id: result.insertId, title, content };
};

exports.update = async (id, { title, content }) => {
    const [result] = await db.promise().query('UPDATE posts SET title = ?, content = ? WHERE id = ?', [title, content, id]);
    return result.affectedRows > 0;
};

exports.delete = async (id) => {
    const [result] = await db.promise().query('DELETE FROM posts WHERE id = ?', [id]);
    return result.affectedRows > 0;
};

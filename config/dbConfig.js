require('dotenv').config();
const mysql = require('mysql2');

// 데이터베이스 연결 설정
const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    waitForConnections: true,
    connectionLimit: 10, // 최대 연결 수
    queueLimit: 0,       // 대기열 제한
});

// 연결 시도
db.getConnection((err) => {
    if (err) {
        console.error('Database connection failed:', err.message);
        process.exit(1); // 연결 실패 시 애플리케이션 종료
    }
    console.log('Connected to the database.');
});

module.exports = db;

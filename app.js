// express
const express = require('express');
// const bodyParser = require('body-parser');
const postRoutes = require('./routes/postRoutes');
const path = require('path');
const methodOverride = require('method-override');

const app = express();
app.use(express.json());  // JSON 요청 본문 처리
app.use(express.urlencoded({ extended: true }));  // URL 인코딩된 데이터 처리

app.use(methodOverride('_method'));

// 라우터 연결
app.use('/posts', postRoutes);

// 서버 시작
app.listen(process.env.PORT, () => console.log(`Server running on http://localhost:${process.env.PORT}`));

// ejs를 템플릿 엔진으로 설정
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// bootstrap
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

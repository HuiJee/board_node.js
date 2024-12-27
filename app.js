// express
const express = require('express');
const bodyParser = require('body-parser');
const postRoutes = require('./routes/postRoutes');
const path = require('path');

const app = express();
app.use(bodyParser.json());

// 라우터 연결
app.use('/posts', postRoutes);

// 서버 시작
app.listen(process.env.PORT, () => console.log(`Server running on http://localhost:${process.env.PORT}`));

app.set('view engine', 'ejs');	// ejs를 템플릿 엔진으로 설정
app.set('views', path.join(__dirname, 'views'));

console.log(app.get('views'));

// bootstrap
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

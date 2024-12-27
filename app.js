// express
const express = require('express');
const bodyParser = require('body-parser');
const postRoutes = require('./routes/postRoutes');


const app = express();
app.use(bodyParser.json());

// 라우터 연결
app.use('/api/posts', postRoutes);

// 서버 시작
app.listen(process.env.PORT, () => console.log(`Server running on http://localhost:${process.env.PORT}`));

app.get('/', function (req, res) {
	res.send('익스프레스 메인페이지');
});

// bootstrap
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

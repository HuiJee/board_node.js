# node.js 통한 게시글
javascript 작업까지 하다보니 node.js만으로도 연습을 해봐야겠다고 생각했습니다.
일단, 블로그들을 참고해서 게시판 형태로 진행해봤습니다.
유효성 등 디벨롭은 계속 진행할 예정입니다.

<br>

## 사용 기술
Node.js, MySQL 8.0.36, Thymeleaf, HTML, Express.js, Bcrypt, CSS

<br>
<hr>
<br>

# 엔드포인트 정리
### PostRoutes
- 전체 게시글 페이지 <code>GET /posts</code>
- 게시글 상세 페이지 <code>GET /posts/:id</code>
- 작성 페이지 <code>GET /posts/form</code>
- 수정 페이지 <code>GET /posts/:id</code>
- 게시글 작성 기능 <code>POST /posts</code>
- 게시글 수정 기능 <code>PUT /posts/:id</code>
- 게시글 삭제 기능 <code>DELETE /posts/:id</code>

<br>
<hr>
<br>

## 1. 전체 게시글 페이지
![image](https://github.com/user-attachments/assets/bb123a2e-f1be-4b7d-be4b-856872fef738)
- 제목을 표시한 뒤, 내용을 일부 노출시켰습니다.
- "자세히 보기" 버튼을 통해 상세 페이지로 이동 가능합니다.

<br>
<hr>
<br>

## 2. 게시글 상세 페이지
![image](https://github.com/user-attachments/assets/822ff161-3212-453d-8912-cfb7cbf3381c)
- 제목, 작성일, 내용이 보여집니다.
- 목록이동, 수정, 삭제 버튼이 존재하여 각각 기능이 실행됩니다.

<br>
<hr>
<br>

## 3. 게시글 작성
![image](https://github.com/user-attachments/assets/8df3b555-5403-4802-a491-dfd08f6d8065)
- 제목, 내용, 닉네임, 비밀번호 설정이 가능합니다.
- 추후 로그인을 도입 시, 닉네임은 자동 입력으로 진행 예정입니다.
- 비밀번호 유효성이나 글자수 제한 등의 기능을 추가할 예정입니다.

![image](https://github.com/user-attachments/assets/14024a4c-7092-43c1-bc4e-2f777d4f6b71)

![image](https://github.com/user-attachments/assets/9d672077-d283-4694-a7f3-91a0278eef08)


<br>
<hr>
<br>

## 4. 게시글 수정 및 삭제
![image](https://github.com/user-attachments/assets/804f4a29-aabb-47db-bee2-475d25b1a5b8)
- 수정버튼 클릭 시 해당 기존 내용이 그대로 표시되며, 수정이 진행됩니다.
- 추후 비밀번호 입력 시 진입 가능하도록 설정 예정입니다.

![image](https://github.com/user-attachments/assets/86292b6a-59a6-4046-b851-15a5e4972123)

![image](https://github.com/user-attachments/assets/b302569f-9eeb-4392-a75d-2f94fabfc377)

<br>
<br>

![image](https://github.com/user-attachments/assets/eb13deb3-755d-458f-8085-4133c15ec45b)
![image](https://github.com/user-attachments/assets/97ae514f-7136-4af1-acba-b36ceaf4794a)

- 삭제 버튼 클릭 시, alert 창을 통해 확인을 받습니다.

![image](https://github.com/user-attachments/assets/fc187af0-6ca2-4646-b3aa-f30e2d19518c)
- 게시글이 삭제됨을 알 수 있으며, 추후 비밀번호 확인을 통해 진행 예정입니다.

<br>
<hr>
<br>

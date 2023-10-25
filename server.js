const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 3000;

// bodyParser를 사용하여 POST 요청의 데이터를 파싱합니다.
app.use(express.urlencoded({ extended: true }));

app.post('/send-email', async (req, res) => {
  const { subject, email, content } = req.body;

  // nodemailer 설정
  let transporter = nodemailer.createTransport({
    service: 'gmail', // 사용할 이메일 서비스
    auth: {
      user: 'yourEmail@gmail.com', // 이메일 주소
      pass: 'yourPassword', // 비밀번호
    },
  });

  let mailOptions = {
    from: 'yourEmail@gmail.com',
    to: email,
    subject: subject,
    text: content,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(500).send('이메일 전송 실패');
    } else {
      res.send('이메일 전송 성공');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

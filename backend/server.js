//필요한 모듈들을 가져오기
const express = require("express");
const bodyParser = require("body-parser");

const db = require("./db");

//Express 서버를 생성
const app = express();

app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());

// // 테이블 생성하기
// db.pool.query(
//   `CREATE TABLE lists (
//   id INTEGER AUTO_INCREMENT,
//   value TEXT,
//   PRIMARY KEY (id)
// )`,
//   (err, results, fileds) => {
//     console.log(`[fileds] ${fileds}, [results] ${results}, [err] ${err}`);
//   }
// );

//DB lists 테이블에 있는 모든 데이터를 프론트 서베에 보내주기
app.get("/api/values", function (req, res) {
  //데이테베이스에서 모든 정보 가져오기
  db.pool.query("SELECT * FROM lists;", (err, results, fileds) => {
    if (err) return res.status(500).send(err);
    else return res.json(results);
  });
});

// 클라이언트에서 입력한 값을 데이터베이스 lists 테이블에 넣어주기
app.post("/api/value", function (req, res, next) {
  //데이터베이스에 값 넣어주기
  db.pool.query(
    `INSERT INTO lists (value) VALUES("${req.body.value}")`,
    (err, results, fileds) => {
      if (err) return res.status(500).send(err);
      else return res.json({ success: true, value: req.body.value });
    }
  );
});

app.listen(5000, () => {
  console.log("Server has started.");
});

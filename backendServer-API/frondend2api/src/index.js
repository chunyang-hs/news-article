const express = require("express");
const connection = require("./db");
const { port } = require("./config");
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get("/list", (req, res) => {
  connection.query("select * from tb_article", (err, articles) => {
    if (err) {
      res.send({
        code: 500,
        message: err.message
      });
    } else {
      res.send({
        code: 200,
        message: 'Success retrieve Article list!',
        data: articles
      });
    }
  });
});

app.post("/create", (req, res) => {
  const { title, publisher, date, summary } = req.body;
  connection.query(`insert into tb_article(title,publisher,date,summary) values ("${title}","${publisher}","${date}","${summary}")`, (err) => {
    if (err) {
      res.send({
        code: 500,
        message: err.message
      });
    } else {
      res.send({
        code: 200,
        message: 'Successfully Create!'
      });
    }
  });
});


app.put("/update", (req, res) => {
  const { title, publisher, date, summary, id } = req.body;
  connection.query(`update tb_article set title="${title}",publisher="${publisher}",date="${date}",summary="${summary}" where id=${id}`, (err) => {
    if (err) {
      res.send({
        code: 500,
        message: err.message
      });
    } else {
      res.send({
        code: 200,
        message: 'Successfully Update!'
      });

    }
  });
});

app.delete("/delete", (req, res) => {
  const id = req.body.id;
  connection.query(`delete from tb_article where id=${id}`, (err) => {
    if (err) {
      res.send({
        code: 500,
        message: err.message
      });
    } else {
      res.send({
        code: 200,
        message: "Successfuly Delete!"
      });
    }
  });
});



app.listen(port, () => {
  console.log(`服务已启动,port:${port}`);
});
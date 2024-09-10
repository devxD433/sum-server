const express = require("express");

const app = express();
app.use(cors());

app.get("/sum", function (req, res) {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  const sum=a+b;
  res.send(sum.toString());
});

app.get("/interest", function (req, res) {
  const principle = parseInt(req.query.principle);
  const rate = parseInt(req.query.rate);
  const time = parseInt(req.query.time);
  const interest=(principle*rate*time)/100;
  const total=interest+principle;

  res.send({
    total:total,
    interest:interest
  })
});

app.listen(3000)
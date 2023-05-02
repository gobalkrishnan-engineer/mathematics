console.log('Hello Gobal Krishnan V');

const express = require("express");
const app = express();
const port = 3000;


var moment = require('moment');
var date = moment().format('LL');
console.log(date);


app.get("/", (req, res) => {
  res.send("Hello World! roo2");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

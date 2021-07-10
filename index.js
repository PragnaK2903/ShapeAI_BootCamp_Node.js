/*global require*/
/*eslint-env es6*/
const express = require("express");
const bodyparser=require("body-parser");
//const path=require("path");
const __dirname=require("__dirname");
const app = express();
const port = 8080;

app.use(bodyparser.urlencoded({extended: true}));

app.get("/", function (request, response) {
  //console.log(request);
  response.send("Check your age in dog years : ");
  response.sendFile(__dirname, "/src/index.html");
});

app.post("/", function(request, response) {
  var age = (Number(request.body.n1)/15);
  response.send("Your age in dog years is : " +age+ " dog years");
});

app.listen(port);

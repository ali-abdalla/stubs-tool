"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var port = 4500;
var app = express();
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.listen(port, function () {
    console.log("App listening on " + port);
});

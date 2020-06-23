// test
var http = require("http");
var fs = require("fs");
var handlebars = require("handlebars");

var template = fs.readFileSync("./src/test/index.html", "utf8");
var data = fs.readFileSync("./content/data.json", "utf8");

var pageBuilder = handlebars.compile(template);
var pageText = pageBuilder(data);
fs.writeFileSync("./public/docs.html", pageText, "utf8");
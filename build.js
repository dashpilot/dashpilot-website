var fs = require("fs");
var handlebars = require("handlebars");
var showdown = require("showdown");
const converter = new showdown.Converter();

var data = fs.readFileSync("./content/data.json", "utf8");
data = JSON.parse(data);

// preprocess markdown
var i = 0;
data.entries.forEach(function(item) {
    data.entries[i].body = converter.makeHtml(item.body);
    console.log("ok");
    i++;
});

// docs
let mydata = {}
let mydata.entries = data.entries.filter(x => x.category == 'docs');

var template = fs.readFileSync("./src/docs.html", "utf8");
var pageBuilder = handlebars.compile(template);
var pageText = pageBuilder(mydata);
fs.writeFileSync("./public/docs.html", pageText, "utf8");
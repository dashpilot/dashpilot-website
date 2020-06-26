var fs = require("fs");
var handlebars = require("handlebars");
var showdown = require("showdown");
const converter = new showdown.Converter();

handlebars.registerHelper('ifEq', function(v1, v2, options) { if (v1 === v2) { return options.fn(this); } return options.inverse(this); });

var data = fs.readFileSync("./public/content/data.json", "utf8");
data = JSON.parse(data);

// preprocess markdown
var i = 0;
data.entries.forEach(function(item) { data.entries[i].body = converter.makeHtml(item.body);
    console.log("ok");
    i++; });

// docs
let mydata = {};
mydata.entries = data.entries.filter((x) => x.category == "docs");
mydata.page = 'Docs';
compile(mydata, "docs.html", "docs.html");

// blog
mydata.entries = data.entries.filter((x) => x.category == "blog");
mydata.page = 'Blog';
compile(mydata, "blog.html", "blog.html");

// copy style
var style = fs.readFileSync("./src/assets/docs.css", "utf8");
fs.writeFileSync("./public/assets/docs.css", style, "utf8");

function compile(mydata, src, dest) {
    var template = fs.readFileSync("./src/" + src, "utf8");
    var pageBuilder = handlebars.compile(template);
    var pageText = pageBuilder(mydata);
    fs.writeFileSync("./public/" + dest, pageText, "utf8");
}
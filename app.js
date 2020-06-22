var post = document.querySelector("#post").innerHTML;
var template = Handlebars.compile(post);

fetch("https://www.dashpilot.com/api/data.json").then((response) => response.json()).then(function(data) {
  console.log(data);
  var converter = new showdown.Converter();

  // preprocess markdown
  var i = 0;
  data.entries.forEach(function(item) {
    data.entries[i].body = converter.makeHtml(item.body);

    i++;
  });

  var html = template(data);

  document.querySelector("#main").innerHTML = html;
  document.querySelector("#main").className = 'fadein';
});
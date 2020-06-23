var post = document.querySelector("#post").innerHTML;
var template = Handlebars.compile(post);

fetch("https://www.dashpilot.com/content/data.json").then((response) => response.json()).then(function(data) {
    console.log(data);
    var converter = new showdown.Converter();

    // preprocess markdown
    var i = 0;
    data.entries.forEach(function(item) {

        console.log(data.entries[i].category)

        if (data.entries[i].category == category) {
            data.entries[i].body = converter.makeHtml(item.body);
            console.log('ok');
            i++;
        }


    });

    var html = template(data);

    document.querySelector("#main").innerHTML = html;

    document.querySelectorAll('pre code').forEach((block) => {
        block.className = 'language-json';
        hljs.highlightBlock(block);
    });

    document.querySelector("#main").className = 'fadein';

});
document.querySelectorAll('pre code').forEach((block) => {
  block.className = 'language-json';
  hljs.highlightBlock(block);
});

let readMore = false;

document.querySelectorAll('summary').forEach((item) => {
  item.addEventListener('click', function() {
    readMore = !readMore
    if (readMore === true) {
      item.innerHTML = 'read less'
    } else {
      item.innerHTML = 'read more'
    }
  });
});
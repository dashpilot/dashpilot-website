document.querySelectorAll('pre code').forEach((block) = > {
  block.className = 'language-json';hljs.highlightBlock(block);
});

document.querySelectorAll('summary').forEach((item) => {
  item.addEventListener('click', function() {
    readMore = !readMore
    if (readMore === true) {
      item.innerHTML = 'Read less'
    } else {
      item.innerHTML = 'Read more'
    }
  });
});
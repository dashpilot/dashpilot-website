document.querySelectorAll('pre code').forEach((block) => {
  block.className = 'language-json';
  hljs.highlightBlock(block);
});

let readMore = false;

document.querySelectorAll('.box').forEach((item) => {
  item.addEventListener('click', function() {
    readMore = !readMore
    if (readMore === true) {
      item.closest('.readmore').style.display = 'block';
    } else {
      item.closest('.readmore').style.display = 'none';
    }
  });
});
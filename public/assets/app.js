document.querySelectorAll('pre code').forEach((block) => {
  block.className = 'language-json';
  hljs.highlightBlock(block);
});

let readMore = false;

document.querySelectorAll('.box').forEach((item) => {
  item.addEventListener('click', function() {
    readMore = !readMore
    let id = item.getAttribute('id');

    if (readMore === true) {
      document.querySelector('#readmore-' + id).style.display = 'block';
    } else {
      document.querySelector('#readmore-' + id).style.display = 'none';
    }
  });
});
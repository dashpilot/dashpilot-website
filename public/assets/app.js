document.querySelectorAll('pre code').forEach((block) => {
  block.className = 'language-json';
  hljs.highlightBlock(block);
});

document.querySelectorAll('.box').forEach((item) => {
  item.addEventListener('click', function() {
    let id = item.getAttribute('id');
    let el = document.querySelector('#readmore-' + id);
    if (isHidden(el)) {
      el.style.display = 'block';
    } else {
      el.style.display = 'none';
    }
  });
});

function isHidden(el) {
  var style = window.getComputedStyle(el);
  return (style.display === 'none')
}
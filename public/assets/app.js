document.querySelectorAll('pre code').forEach((block) => {
  block.className = 'language-json';
  hljs.highlightBlock(block);
});
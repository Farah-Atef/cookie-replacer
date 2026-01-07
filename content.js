function replaceCookies() {
  const walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
  let node;

  while (node = walk.nextNode()) {
    node.nodeValue = node.nodeValue.replace(/cookies?/gi, '🍪');
  }
}

replaceCookies();

const observer = new MutationObserver(replaceCookies);
observer.observe(document.body, { childList: true, subtree: true });
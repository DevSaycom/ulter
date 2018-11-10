function copyPhone() {
  var range = document.getSelection().getRangeAt(0);
  range.selectNode(document.getElementById("a"));
  window.getSelection().addRange(range);
  document.execCommand("copy")
}

function copyEmail() {
  var range = document.getSelection().getRangeAt(0);
  range.selectNode(document.getElementById("b"));
  window.getSelection().addRange(range);
  document.execCommand("copy")
}
let save = 0;

function back() {
  window.history.back();
}
function forward() {
  window.history.forward();
}

function bookmark1() {
  localStorage.setItem("blog", "save");
}

let blogs = "<h2>My-Blogs</h2>" + "<table><tr><td><h3>My Coding History</h3> <img src='something.gif'> <p>This is about my coding joruney</p> <p><a href='/historyofcoding'><button>View-Blog</button></a></p></td>" + "<td><h3>My OCD</h3> <img src='OCD.gif' height='50px' width='50px'> <p>Well it's about my OCD and this weird monster inside of my head that wants to destory everything.</p> <p><a href='/OCD'><button>View-Blog</button></a></p></td></tr><table>";

const blogtable = document.getElementsByClassName("blogtable");
blogtable.innerHTML = blogs;

function back() {
  window.history.back();
}

function forward() {
  window.history.forward();
}

let blogs = [
"<h2>My-Blogs</h2>",
"<table>",
"<tr>",
"<td><h3>My Coding History</h3> <img src='something.gif'> <p>This is about my coding joruney</p> <p><a href='/historyofcoding'><button>View-Blog</button></a></p></td>",
"<td><h3>My OCD</h3> <img src='OCD.gif' height='50px' width='50px'> <p>Well it's about my OCD and this weird monster inside of my head that wants to destory everything.</p> <p><a href='/OCD'><button>View-Blog</button></a></p></td>",
"</tr>",
"<table>"
];

let games = [
"<h1>My Games</h1>",
"<table class='stuff'>",
"<tr>",
"<td><h3>Cubic v2</h3><img src='arcade-TEST-2.png'><p>Well it's more than a testgame... But I need help naming it</p><a href='cubic-v2'><button class='TESTGAME'>Play-Game</button></a></td>",
"<td><h3>Cubic v1</h3><img src='arcade-TEST-2.png'><p>It's a minecraft</p><a href='cubic-v1'><button class='TESTGAME'>Play-Game</button></a></td>",
 "</tr>",
 "<tr>",
  "<td><h3>TEST #2</h3><img src='arcade-TEST-2.png'><p>It's made just by some rough JS and The HTML Canvas.</p><a href='TESTGAME'><button class='TESTGAME'>Play-Game</button></a></td>",
  "</tr>",
  "</table>"
];

function loadblogs() {
let data = "";
for (let w = 0; w < blogs.length; w++) {
data = data + blogs[w];
}
document.getElementById("blogtable").innerHTML = data;
}

function loadgames() {
let data = "";
for (let w = 0; w < games.length; w++) {
data = data + games[w];
}
document.getElementById("gametable").innerHTML = data;
}

function back() {
  window.history.back();
}

function forward() {
  window.history.forward();
}

loadblogs();
loadgames();

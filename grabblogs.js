let blogs;
let data;

function loadblogs() {
blogs = [
"<h2>My Blogs</h2>",
"<table>",
"<tr>",
"<td><h3>My Coding History</h3> <img src='something.gif'> <p>This is about my coding joruney</p> <p><a href='/historyofcoding'><button>View-Blog</button></a></p></td>",
"<td><h3>My OCD</h3> <img src='OCD.gif' height='25%' width='25%'> <p>Well it's about my OCD.</p> <p><a href='/OCD'><button>View-Blog</button></a></p></td>",
"</tr>",
"<table>"
];
}

function grabblogs() {
data = "";
for (let w = 0; w < blogs.length; w++) {
data = data + blogs[w];
}
document.getElementById("blogtable").innerHTML = data;
}

loadblogs();
grabblogs();

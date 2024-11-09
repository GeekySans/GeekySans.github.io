let posts;
let data;

function loadposts() {
posts = [
"<h2>My Posts</h2>",
"<table>",
"<tr>",
"<td><p></p></td>",
"<td></td>",
"</tr>",
"<table>"
];
}

function grabposts() {
data = "";
for (let w = 0; w < posts.length; w++) {
data = data + posts[w];
}
document.getElementById("posttable").innerHTML = data;
}

loadposts();
grabposts();

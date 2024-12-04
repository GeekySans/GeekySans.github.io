let posts;
let data;

function loadposts() {
posts = [
"<h2>My Posts</h2>",
"<table>",
"<tr>",
"<td><h3>My first post!</h3> <p>I had a pretty good day today I just made a discord server.</p>",
"<p>I was also talking to people about many controversial topics for fun, some of these topics were should you clone humans, should you determine the gender of your baby, and should you modify food so you can give it to the poor.</p>",
"<p>Here are my thoughts about this 1. People shouldn't clone humans because it is bad for the gene pool.</p> <p>2. I don't care on this one so I'm giving it a pass.</p> <p>3. OF COURSE YOU SHOULD DO THIS WHO CARES IF IT'S ORGANIC THEIR GOING TO DIE YOU NEED TO FEED THEM FOOD.</p></td>",
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

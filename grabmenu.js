let menu;
let data1;
const now = new Date();
const hour = now.getHours();
let greeting;

if (hour > 18) {
greeting = 'Good evening'
} else if (hour > 12) {
greeting = 'Good afternoon'
} else if (hour > 0) {
greeting = 'Good morning'
} else {
greeting = 'Welcome'
}

function loadmenu() {
menu = [
"<h1>GeekySans's Digital Playground" + "<h3>" + greeting + "</h3></h1>",
"<div> <a href='/home'><button class='home'>Home</button></a> <a href='https://spacehey.com/profile?id=2706928'><button class='spacehey'>Spacehey</button></a> <a href=''><button class='forum'>Forum</button></a> <a href='/blogs'><button class='blogs'>Blogs</button></a> <a href='/games'><button class='games'>Games</button></a> <a href='/posts'><button class='posts'>Posts</button></a> <a href='/SocialFeed'><button class='socialfeed'>SocialFeed</button></a> </div>",
"<div> <button onclick='back()'>Back</button> <button onclick='forward()'>Forward</button> <a href='/search'><button type='submit' class='search'><img src='spyglass.png' width='20' height='20'></button></a> </div>",
"<hr>"
];
}

function grabmenu() {
data1 = "";
for (let wm = 0; wm < menu.length; wm++) {
data1 = data1 + menu[wm];
}
document.getElementById("menu").innerHTML = data1;
}

loadmenu();
grabmenu();

function back() {
  window.history.back();
}

function forward() {
  window.history.forward();
}

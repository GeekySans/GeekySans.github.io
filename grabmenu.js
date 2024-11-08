let menu;
let data1;

function loadmenu() {
menu = [
"<h1>GeekySans's Digital Playground</h1>",
"<div> <a href='/home'><button class='home'>Home</button></a> <a href='https://spacehey.com/profile?id=2706928'><button class='spacehey'>Spacehey</button></a> <a href='https://nerdie-board.forumotion.com/'><button class='forum'>Forum</button></a> <a href='/blogs'><button class='blogs'>Blogs</button></a> <a href='/games'><button class='games'>Games</button></a> <a href='/apps'><button class='apps'>Apps</button></a> </div>",
"<div> <button onclick='back()'>Back</button> <button onclick='forward()'>Forward</button> <form action='search.html' method='get'> <input type='search' name='search' placeholder='Search Anything?'> <button type='submit' class='search'><img src='spyglass.png' width='20' height='20'></button> </form> </div>",
"<hr>"
];
}

function grabmenu() {
data1 = "";
for (let wm = 0; wm < menu.length; wm++) {
data1 = data1 + nav[wm];
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

let games;

function loadgames() { 
games = [
"<h1>My Games</h1>",
"<table class='stuff'>",
"<tr>",
"<td><h3>Cubic v2</h3><img src='Cubic-v1Logo-1.png'><p>Version 2 just came out. Grass colors have changed, you can build with more tiles, and you can choose world sizes.</p><a href='cubic-v2'><button class='TESTGAME'>Play-Game</button></a></td>",
"<td><h3>Cubic v1</h3><img src='Cubic-v1Logo-2.png'><p>It's a Minecraft Indev clone that I'm working on.</p><a href='cubic-v1'><button class='TESTGAME'>Play-Game</button></a></td>",
 "</tr>",
 "<tr>",
  "<td><h3>TEST #2</h3><img src='arcade-TEST-2.png'><p>It's made just by some rough JS and The HTML Canvas.</p><a href='TESTGAME'><button class='TESTGAME'>Play-Game</button></a></td>",
  "</tr>",
  "</table>"
];
}

function grabgames() {
let data = "";
for (let w = 0; w < games.length; w++) {
data = data + games[w];
}
document.getElementById("gametable").innerHTML = data;
}

loadgames();
grabgames();

let games;
let data0;

function loadgames() { 
games = [
"<h1>My Games</h1>",
"<table class='stuff'>",
"<tr>",
"<td><h3>Cubic v2</h3><img src='Cubic-v2Logo.png' width='50%' height='50%'><p>Version 2 just came out. Grass colors have changed, you can build with more tiles, and you can choose world sizes.</p><a href='cubic-v2'><button class='TESTGAME'>Play-Game</button></a></td>",
"<td><h3>Cubic v1</h3><img src='Cubic-v1Logo.png' width='50%' height='50%'><p>It's a Minecraft Indev clone that I'm working on.</p><a href='cubic-v1'><button class='TESTGAME'>Play-Game</button></a></td>",
 "</tr>",
 "<tr>",
  "<td><h3>TEST #2</h3><img src='arcade-TEST-2.png'><p>It's made just by some rough JS and The HTML Canvas.</p><a href='TESTGAME'><button class='TESTGAME'>Play-Game</button></a></td>",
  "</tr>",
  "</table>"
];
}

function grabgames() {
data0 = "";
for (let w0 = 0; w0 < games.length; w0++) {
data0 = data0 + games[w0];
}
document.getElementById("gametable").innerHTML = data0;
}

loadgames();
grabgames();

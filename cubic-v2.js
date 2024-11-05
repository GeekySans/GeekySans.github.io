let grid = [];
let b = ["rgb(112, 192, 0)", "rgb(0, 128, 0)", "rgb(0, 64, 32)", "rgb(128, 0, 0)", "rgb(32, 32, 32)", "rgb(128, 64, 0)",];
let gmx;
let pgmx = 16;
let grasscolor;

function generate() {
grid = [];
gmx = pgmx;

for (let l = 0; l < gmx * gmx; l++) {
grasscolor = Math.floor(Math.random() * 3);
grid.push(b[grasscolor]);
}

}

generate();

let cmx = 0;
let cmy = 0;
let mx = 2;
let my = 2;
let hand = 0;
let r = 0;
let x = 0;
let y = 0;

const canvas = document.getElementById("myCanvas");
const paint = canvas.getContext("2d");

function refresh() {
paint.clearRect(0, 0, 500, 500);

r = 0;
x = 0;
y = 0;

if (cmx < 0) {
cmx = 0;
}

if (cmx > gmx - 5) {
cmx = gmx - 5;
}

if (cmy < 0) {
cmy = 0;
}

if (cmy > gmx - 5) {
cmy = gmx - 5;
}

if (mx < 0) {
mx = 0;
}

if (mx > 4) {
mx = 4;
}

if (my < 0) {
my = 0;
}

if (my > 4) {
my = 4;
}

for (let l = 0; l < 5; l++) {
paint.fillStyle = grid[cmx + (cmy * gmx) + r];
paint.fillRect(x, 0, 50, 50);



paint.fillStyle = grid[cmx + (cmy * gmx) + r + (gmx)];
paint.fillRect(x, 50, 50, 50);



paint.fillStyle = grid[cmx + (cmy * gmx) + r + (gmx * 2)];
paint.fillRect(x, 100, 50, 50);



paint.fillStyle = grid[cmx + (cmy * gmx) + r + (gmx * 3)];
paint.fillRect(x, 150, 50, 50);



paint.fillStyle = grid[cmx + (cmy * gmx) + r + (gmx * 4)];
paint.fillRect(x, 200, 50, 50);

x = x + 50;
r = r + 1;
}
paint.strokeRect(mx * 50, my * 50, 50, 50);

setTimeout(refresh, 1);
}

function up() {
cmy = cmy - 1;
}

function left() {
cmx = cmx - 1;
}

function right() {
cmx = cmx + 1;
}

function down() {
cmy = cmy + 1;
}

function mup() {
my = my - 1;
}

function mleft() {
mx = mx - 1;
}

function mright() {
mx = mx + 1;
}

function mdown() {
my = my + 1;
}

function place() {
grid[(cmx) + (cmy * gmx) + (mx + my * gmx)] = b[hand];
}

refresh();

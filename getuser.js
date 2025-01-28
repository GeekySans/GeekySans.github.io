let userData;
let friendData;
let bulletinData;
let friends = "";
let n;
let locateUser;

const formEl = document.querySelector('.form');
formEl.addEventListener('submit', event => {
  event.preventDefault();
  const formData = new FormData(formEl);
  locateUser = formData.get('website');
  console.log(locateUser);
  getUser(locateUser);
});

async function getUser(file) {
  let myObject = await fetch(file);
  let myJSON = await myObject.text();
  userData = JSON.parse(myJSON);
  document.getElementById('username').innerHTML = "<h1>" + userData.username + "</h1>";
  document.getElementById('bio').innerHTML = "<h3>Bio: " + userData.bio + "</h3>";
for (i = 0; i < userData.friends.length; i++) {
  getFriend(userData.friends[i].userlink);
}
  friends = "";
  
  n = userData.postbatchs;
  getPosts(userData.posturl + n + ".json");
}

async function getFriend(file) {
  let myObject = await fetch(file);
  let myJSON = await myObject.text();
  friendData = JSON.parse(myJSON);
  getBulletin(friendData.friends[1].bulletin, friendData.username, friendData.bio);
  }

async function getBulletin(file, username, bio) {
  let myObject = await fetch(file);
  let myJSON = await myObject.text();
  bulletinData = JSON.parse(myJSON);
  displayFriend(username, bio, bulletinData.bulletinarray[0].title, bulletinData.bulletinarray[0].text);
}

function displayFriend(username, bio, bulletintitle, bulletintext) {
  friends = "";
  friends = friends + "<div id='friend'><h3>" + username + "</h3>" + "<h3>Bio: " + bio + "</h3>";
  friends = friends + "<h3>Bulletins:</h3> <h3>" + bulletintitle + "</h3>" + "<h3>" + bulletintext + "</h3></div>";
  document.getElementById('friends').innerHTML = friends;
}

function backPosts() {
if (n > 0) {
n = n - 1;
getPosts(userData.posturl + n + ".json");
}
}

function forwardPosts() {
if (n < userData.postbatchs) {
n = n + 1;
getPosts(userData.posturl + n + ".json");
}
}

async function getPosts(file) {
  let myObject = await fetch(file);
  let myJSON = await myObject.text();
  let posts = JSON.parse(myJSON);
  let string = "";
for (i = 0; i < posts.postarray.length; i++) {
  string = string + "<h3>" + posts.postarray[i].title + "</h3>";
  string = string + "<p>" + posts.postarray[i].text + "</p>"
}
document.getElementById('posts').innerHTML = string;
}

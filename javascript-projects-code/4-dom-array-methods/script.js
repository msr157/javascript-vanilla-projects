const main = document.getElementById("main");
const addUserbtn = document.getElementById("add-user");
const doubleBtn = document.getElementById("double");
const showMillionairesBtn = document.getElementById("show-millionaires");
const sortBtn = document.getElementById("sort");
const calculateWealthBtn = document.getElementById("calculate-wealth");

//fetch random user and money
getRandomUser();
getRandomUser();
getRandomUser();

let data = [];

async function getRandomUser() {
  const res = await fetch("http://randomeuser.me/api");
  const data = await res.json;

  console.log(data);

  const user = data.results[0];

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 100000),
  };

  console.log(newUser);

  addData(newUser);
}

function addData(obj) {
  data.push(obj);
}












let table = document.getElementById("tablePlayers");
let playerName = document.getElementById("playerName");
const newPlayer = document.getElementById("submit");

let players = [];

window.onload = function () {
  players = JSON.parse(localStorage.getItem("players")) || [];
  update();
};

newPlayer.onclick = addNewPlayer;

function addNewPlayer() {
  let player = {
    name: playerName.value,
    win: 0,
    tie: 0,
    loss: 0,
    points: 0,
  };

  players.push(player);
  localStorage.setItem("players", JSON.stringify(players));
  update();
}

function update() {
  let playerHTML = "";
  for (let i = 0; i < players.length; i++) {
    playerHTML += `
<tr class="tableRow">
  <td contenteditable="true">${players[i].name}</td>
  <td>${players[i].win} <div><button onClick="addWin(${i})">+ Win</button></div> </td>
  <td>${players[i].tie} <div><button onClick="addTie(${i})">+ Tie</button></div> </td>
  <td>${players[i].loss} <div><button onClick="addLoss(${i})">+ Loss</button></div> </td>
  <td>${players[i].points}</td>
</tr>
`;
  }

  table.insertAdjacentHTML("beforeend", playerHTML);
  table.innerHTML = playerHTML;
  playerName.value = "";
}

function addWin(i) {
  players[i].win++;
  players[i].points = players[i].points + 3;
  update();
}

function addTie(i) {
  players[i].tie++;
  players[i].points++;
  update();
}

function addLoss(i) {
  players[i].loss++;
  update();
}

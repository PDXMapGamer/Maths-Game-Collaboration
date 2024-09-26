import { add } from 'mathjs';
import { randomInt } from 'mathjs';
console.log(`Hello`); //checking everything is linked.
//! Global variables for each section of the website
let score = 0;
let isListnerAttached = false;

function generateAdd() {
  const equationArea = createDiv();
  mathsArea.append(equationArea);
  const appendee = document.createElement('p');
  let a = randomInt(1, 11);
  let b = randomInt(1, 11);
  let ans = add(a, b);
  appendee.textContent = `${a} + ${b} = ?`;
  equationArea.append(appendee);

  const answerSubmit = document.getElementById('answerForm');
  answerSubmit.addEventListener('submit', function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(answerSubmit);
    const formValues = Object.fromEntries(formData);
    let input = formValues.answerInput;
    console.log(formData);
    console.log(formValues);
    console.log(answerSubmit);
    console.log(input);
    if (input == ans) {
      appendee.textContent = `${a} + ${b} = ${ans}. You are correct :)`;
      score++;
    } else {
      appendee.textContent = ` ${a} + ${b} = ${ans}. You are incorrect :(`;
    }
    scoreDisplay.textContent = `Score: ${score}`;
    document.getElementById('mathsQuestion').textContent = '';
    document.getElementById('answerInput').value = '';
    console.log('you added an event listner');
    answerSubmit.removeEventListener('submit', handleSubmit);
    generateAdd();
  });
}
function createDiv() {
  const returnValue = document.createElement('div');
  returnValue.classList.add('equation-area');
  return returnValue;
}

const homePage = document.getElementById('index-section');
const gamesPage = document.getElementById('games-section');
const leaderboardPage = document.getElementById('leaderboard-section');
const mathsArea = document.getElementById('mathsQuestion');
const scoreDisplay = document.getElementById('score-display');
// removed some links as only using a nav bar for ease of styling and use -Anu

document.getElementById("submitButton").addEventListener("click", loadGamesSection);
document.getElementById("games-link").addEventListener("click", loadGamesSection);

// document.getElementById("leaderboard-games-link").addEventListener("click", loadGamesSection);
document.getElementById('home-link').addEventListener('click', loadHomeSection);
// document.getElementById("leaderboard-home-link").addEventListener("click", loadHomeSection);
document
  .getElementById('leaderboard-link')
  .addEventListener('click', loadLeaderboardSection);
// document.getElementById("games-leaderboard-link").addEventListener("click", loadLeaderboardSection);

const timerContainer = document.getElementById("timerContainer");
const startButton = document.getElementById("startButton");
startButton.addEventListener("click", timerEventHandler);
startButton.addEventListener("click", timeCounterEventHandler);
document.getElementById("usernameForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  let user_name = document.getElementById(`username`).value;
  console.log(user_name);
  try {
    const response = await fetch("http://localhost:8080/submitUserName", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_name }),
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
  });
//adding event listners

function timerEventHandler() {
  //clearing the div everytime you press the "start" button
  document.getElementById('timerContainer').innerHTML = '';
  for (
    let i = 0;
    i < 61;
    i++ //putting it through a for loop so it appears 60 times.
  ) {
    function timerCountdown() {
      const timerBead = document.createElement('p');
      //creating an element.
      timerBead.style.display = 'inline-block';
      timerBead.style.background = 'grey';
      timerBead.style.borderRadius = '125px';
      timerBead.style.height = '10px';
      timerBead.style.width = '10px';
      timerBead.style.margin = '5px';
      //style so it becomes a grey circle.
      const individualBead = timerContainer.appendChild(timerBead);
      //appending the circle to the div.
      setInterval(function backgroundChange() {
        timerBead.style.background = 'red';
      }, 1000 * (i + 1));
      //running the function through a setInterval so it changes the colour of the dot to red after every second.
    }
    timerCountdown();
  }

  startButton;
  //finshing the function Sam 24/09/24 2227 .
}

function timeCounterEventHandler() {
  const timerNumber = document.getElementById('countdownTimer');
  //creating a time countdown.
  timerNumber.innerHTML = '1:00';
  //setting the start time to a minute.
  let seconds = 60; //pulled the variable into the function and everything works like intended. Sam 25/09/24 1020
  let timerCounter = setInterval(function () {
    document.getElementById('countdownTimer').innerHTML = seconds--;
    //setInterval function which reduces the time by 1 every second.
    //Sam 24/09/24 2239
    if (seconds < 0) {
      clearInterval(timerCounter);
      npm;
      setTimeout(() => {
        alert('Time is up your score is will be submitted to the leaderboard');
      }, 500);
    } //had to add an if function for the alert Sam 25/09/24 1000. Still not resrting when I press the button so will have another think of how I want to achive this Sam 25/09/24 1014. Took out alert since it was janky will link sperately Sam 25/09/24 1019 Added the alert back in had to use setTimeout function to make it appear after and less janky. Sam 25/09/25 1031
  }, 1000);
}
//changed all visible display blocks to block as grid was messing with the layout for now
function loadHomeSection() {
  homePage.style.display = 'block'; //! Change this to whatever display style you choose to style home page with
  gamesPage.style.display = 'none';
  leaderboardPage.style.display = 'none';
}
function loadGamesSection() {
  homePage.style.display = 'none';
  gamesPage.style.display = 'grid';
  leaderboardPage.style.display = 'none';
}

async function loadLeaderboardSection() {
  homePage.style.display = "none";
  gamesPage.style.display = "none";
  leaderboardPage.style.display = "block"; //! Change this to whatever display style you choose to style leaderboard page with
  leaderboardPage.innerHTML = "";
  const title = document.createElement("h1");
  title.textContent = "Leaderboard!";
  leaderboardPage.append(title);
  const leaderboardGrid = document.createElement("div");
  leaderboardGrid.classList.add("leaderboard-grid");
  leaderboardPage.append(leaderboardGrid);
  let name = createGridItem();
  let addScore = createGridItem();
  let substractScore = createGridItem();
  let multiplyScore = createGridItem();
  let divideScore = createGridItem();
  let randomScore = createGridItem();
  name.textContent = "Username:";
  leaderboardGrid.append(name);
  addScore.textContent = "Add:";
  leaderboardGrid.append(addScore);
  substractScore.textContent = "subtract:";
  leaderboardGrid.append(substractScore);
  multiplyScore.textContent = "Multiply:";
  leaderboardGrid.append(multiplyScore);
  divideScore.textContent = "Divide:";
  leaderboardGrid.append(divideScore);
  randomScore.textContent = "Random:";
  leaderboardGrid.append(randomScore);
  try {
    const response = await fetch("http://localhost:8080/get-leaderboard", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const leaderboard = await response.json();
    leaderboardGrid.style.gridTemplateRows = `repeat(${leaderboard.length + 1}, 1fr)`;
    leaderboard.forEach((element) => {
      Object.entries(element).forEach((element) => {
        if (element[0] != "id") {
          const appendee = createGridItem();
          appendee.textContent = element[1];
          leaderboardGrid.append(appendee);
        }
      });
    });
  } catch (error) {
    console.error("fail to fetch data from leaderboard", error);
    document.getElementById("leaderboard-section").textContent = "error cannot access leaderboard";
  }
}
function createGridItem() {
  const gridItem = document.createElement("p");
  gridItem.classList.add("grid-item");
  return gridItem;

}

console.log(`Hello`); //checking everything is linked.

const timerContainer = document.getElementById("timerContainer");

const startButton = document.getElementById("startButton");
startButton.addEventListener("click", timerEventHandler);
startButton.addEventListener("click", timeCounterEventHandler);

//adding event listners

function timerEventHandler() {
  //clearing the div everytime you press the "start" button
  document.getElementById("timerContainer").innerHTML = "";
  for (
    let i = 0;
    i < 61;
    i++ //putting it through a for loop so it appears 60 times.
  ) {
    function timerCountdown() {
      const timerBead = document.createElement("p");
      //creating an element.
      timerBead.style.display = "inline-block";
      timerBead.style.background = "grey";
      timerBead.style.borderRadius = "125px";
      timerBead.style.height = "10px";
      timerBead.style.width = "10px";
      timerBead.style.margin = "5px";
      //style so it becomes a grey circle.
      const individualBead = timerContainer.appendChild(timerBead);
      //appending the circle to the div.
      setInterval(function backgroundChange() {
        timerBead.style.background = "red";
      }, 1000 * (i + 1));
      //running the function through a setInterval so it changes the colour of the dot to red after every second.
    }
    timerCountdown();
  }

  startButton;
  //finshing the function Sam 24/09/24 2227 .
}

function timeCounterEventHandler() {
  const timerNumber = document.getElementById("countdownTimer");
  //creating a time countdown.
  timerNumber.innerHTML = "1:00";
  //setting the start time to a minute.
  let seconds = 60; //pulled the variable into the function and everything works like intended. Sam 25/09/24 1020
  let timerCounter = setInterval(function () {
    document.getElementById("countdownTimer").innerHTML = seconds--;
    //setInterval function which reduces the time by 1 every second.
    //Sam 24/09/24 2239
    if (seconds < 0) {
      clearInterval(timerCounter);
      setTimeout(() => {
        alert("Time is up your score will be submitted to the leaderboard");
      }, 500);
    } //had to add an if function for the alert Sam 25/09/24 1000. Still not resrting when I press the button so will have another think of how I want to achive this Sam 25/09/24 1014. Took out alert since it was janky will link sperately Sam 25/09/24 1019 Added the alert back in had to use setTimeout function to make it appear after and less janky. Sam 25/09/25 1031
  }, 1000);
}

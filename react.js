ReactDOM.render(
  React.createElement("h1", null, "Hello, timer!"),
  document.getElementById("root")
);
ReactDOM.render(
  React.createElement(
    "p",
    null,
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae est sed lacus venenatis varius eu vel mi. Ut arcu magna, euismod in consectetur sit amet, mollis non libero. Donec faucibus vitae nisi at bibendum. Nulla tincidunt sed nulla eget condimentum. Praesent facilisis nisi vitae velit dignissim, ac dictum velit lacinia. Maecenas ut quam eget odio egestas aliquet. Nullam non libero lacinia, aliquam dui vitae, fringilla lorem. Aliquam erat volutpat. Ut cursus felis ut odio luctus, vel iaculis nisi tempus. Nunc semper augue eget velit varius cursus. In posuere consequat quam at varius. Proin eleifend suscipit dapibus."
  ),
  document.getElementById("root2")
);

let timingState = 0; //0 : ReadyToRun;  1 : Running;    2 : Stopped
function Stopwatch_Interaction() {
  timingState++;
  if (timingState > 2) {
    timingState = 0;
  }

  if (timingState == 0) {
    Stopwatch_Reset();
  }
  if (timingState == 1) {
    Stopwatch_Start();
  }
  if (timingState == 2) {
    Stopwatch_Stop();
  }
}

let stopwatchID = 0;
function Stopwatch_Start() {
  // PlayAudio(false);
  UpdateTimer();
  stopwatchID = setInterval(UpdateTimer, 1000);
  document.querySelector(".clock").style.background = "#7fffd49e";
}
function Stopwatch_Stop() {
  // PlayAudio(false);
  clearInterval(stopwatchID);
  document.querySelector(".clock").style.background = "#7fffd464";
}
function Stopwatch_Reset() {
  // PlayAudio(true);
  timerValue = 0;
  UpdateTimer();
  document.querySelector(".clock").style.background = "#ffffff00";
}

const timer = document.querySelector("Timer");
const secondHand = document.querySelector(".second-hand");
let timerValue = 0;
function UpdateTimer() {
  const secondsAsDegrees = (timerValue / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsAsDegrees}deg)`;

  timerValue++;
  //timer.innerHTML = timerValue;
  document.querySelector(".display").innerHTML = timerValue - 1;
}

// const audio_TimerChange = document.querySelector(`audio[data-key="00"]`);
// const audio_TimerReset = document.querySelector(`audio[data-key="01"]`);
// function PlayAudio(isReset) {
//   let audio = isReset ? audio_TimerReset : audio_TimerChange;
//   if (!audio) return;
//   audio.currentTime = 0;
//   audio.play();
// }

window.addEventListener("click", Stopwatch_Interaction);

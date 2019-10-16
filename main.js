var alertText = document.querySelector('.alert-text');
var asideContainer = document.querySelector('.aside-form');
var errorMessage = document.querySelector('.error-div');
var exerciseButton = document.querySelector('.exercise-button');
var formInput = document.querySelectorAll('input');
var goalInput = document.querySelector('.goal');
var inputGoal = document.getElementById('goal-input');
var inputMinutes = document.getElementById('minutes-input');
var inputSeconds = document.getElementById('seconds-input');
var meditateButton = document.querySelector('.meditate-button');
var minutesInput = document.querySelector('.minutes');
var secondsInput = document.querySelector('.seconds');
var startActivityBtn = document.querySelector('.start-activity');
var studyButton = document.querySelector('.study-button');
var timerBtn = document.querySelector('.start');

// Function for input error
startActivityBtn.addEventListener('click', startError);

function startError() {
  if (inputGoal.value === '' &&
      inputMinutes.value === '' &&
      inputSeconds.value === '') {
      startActivityBtn.disabled = true;
      errorImg();
} else if (inputGoal.value !== '' && inputMinutes.value !== '' && inputSeconds.value !== '') {
    document.querySelector('.error-span').classList.add('hidden');
    setTimer();
  }
};

function errorImg() {
  document.querySelector('.error-span').classList.remove('hidden');
};

inputGoal.addEventListener('keyup', function(){
  if (inputGoal.value !== ''){
    startEnable();
  }
});

inputMinutes.addEventListener('keyup', function(){
  if (inputMinutes.value !== ''){
    startEnable();
  }
});

inputSeconds.addEventListener('keyup', function(){
  if (inputSeconds.value !== ''){
    startEnable();
  }
});

function startEnable() {
  startActivityBtn.disabled = false;
};

// var variable that changes depending on which button was picked
// function categorySelect() {
  // if blah was picked then add to variable
  // put variable in function below to display which one was picked.
// }

// creater additonal properties in css.
studyButton.addEventListener('click', function(){
  event.preventDefault();
  studyButton.classList.toggle('active-study-button');
  exerciseButton.classList.remove('active-exercise-button');
  meditateButton.classList.remove('active-meditate-button');
});

meditateButton.addEventListener('click', function(){
  event.preventDefault();
  meditateButton.classList.toggle('active-meditate-button');
  studyButton.classList.remove('active-study-button');
  exerciseButton.classList.remove('active-exercise-button');
});

exerciseButton.addEventListener('click', function(){
  event.preventDefault();
  exerciseButton.classList.toggle('active-exercise-button');
  studyButton.classList.remove('active-study-button');
  meditateButton.classList.remove('active-meditate-button');
});

let countdown;

function setTimer(event) {
  var sec = parseInt(inputSeconds.value);
  var min = parseInt(inputMinutes.value) * 60;
  var time = (min + sec);
  showTimer(time);
}

function showTimer(seconds) {
  const minutes1 = inputMinutes.value;
  var remainderSeconds = seconds % 60;
  var timerTemplate =
  `
  <div class ='heading'>
    <h1 class='aside-title'>Current Activity</h1>
  </div>
  <aside class='aside-timer'>
    <section class='timer-page'>
        <h2 class='timer-heading'>${goalInput.value}</h2>
        <h2 class='minutes-seconds'>${minutes1}:${remainderSeconds < 10 ? '0' : '' }${remainderSeconds}</h2>
        <button type="button" class="start">Start</button>
        <div class='log-button'>

        </div>
      </section>
    </aside>`;
  asideContainer.innerHTML = timerTemplate;

  var startTimer = document.querySelector('.start');
  startTimer.addEventListener('click', runTimer);

  function runTimer(event) {
    counter(seconds);
}
  function counter(seconds) {
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);

    countdown = setInterval(() => {
      const secondsLeft = Math.round((then - Date.now()) / 1000);
      if(secondsLeft < 0) {
        clearInterval(countdown);
        return;
      }
      displayTimeLeft(secondsLeft);
    }, 1000);
  }
  var main = document.querySelector('.main');
  var timerDisplay = document.querySelector('.minutes-seconds');
  var logButton = document.querySelector('.log-button');

  function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    var remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : '' }${remainderSeconds}`;
    timerDisplay.textContent = display;

    if (remainderSeconds === -0 && minutes === 0){
      startTimer.innerHTML = 'Task Complete!';
      timerDisplay.innerHTML = 'Good Job!';
      logButton.innerHTML += `<button type="button" class="log">log-activity</button>`;
    };
}
  logButton.addEventListener('click', addCard);
  function addCard(){
    var mainTemplate = `<h2 class='main-title'>Past Activities</h2><div class='card'>
     <h5>${inputMinutes.value} Min ${inputSeconds.value} Seconds</h5>
     <h3>${goalInput.value}</h4>
     </div>`;
     main.innerHTML = mainTemplate;
  }
};

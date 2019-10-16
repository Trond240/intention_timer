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

// Checks if inputs are filled.
startActivityBtn.addEventListener('click', startError);

function startError() {
  if (inputGoal.value === '' ||
      inputMinutes.value === '' ||
      inputSeconds.value === '') {
      startActivityBtn.disabled = true;
      errorImg();
} else if (inputGoal.value === '' && inputMinutes.value === '' && inputSeconds.value === '') {
    document.querySelector('.error-span').classList.add('hidden');
    setTimer();
  }
};

// Displays error if an input is not filled.
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

// Enables button if inputs are filled.
function startEnable() {
  startActivityBtn.disabled = false;
};

// Functions that toggle category button colors.
var startColor = 0;
studyButton.addEventListener('click', function(){
  event.preventDefault();
  studyButton.classList.toggle('active-study-button');
  exerciseButton.classList.remove('active-exercise-button');
  meditateButton.classList.remove('active-meditate-button');
  startColor = 1;
});

meditateButton.addEventListener('click', function(){
  event.preventDefault();
  meditateButton.classList.toggle('active-meditate-button');
  studyButton.classList.remove('active-study-button');
  exerciseButton.classList.remove('active-exercise-button');
  startColor = 2;
});

exerciseButton.addEventListener('click', function(){
  event.preventDefault();
  exerciseButton.classList.toggle('active-exercise-button');
  studyButton.classList.remove('active-study-button');
  meditateButton.classList.remove('active-meditate-button');
  startColor = 3;
});

// Sets up the seconds to be passed through the timer.
function setTimer(event) {
  var sec = parseInt(inputSeconds.value);
  var min = parseInt(inputMinutes.value) * 60;
  var seconds = (min + sec);
  showTimer(seconds);
}

// Main function to display timer and cards.
function showTimer(seconds) {
  const minutes1 = inputMinutes.value;
  var remainderSeconds = seconds % 60;
  var timerTemplate =
  `<h2 class ='aside-title'>Current Activity</h2>
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

// List of variables and event listeners used in display timer and cards.
  let countdown;
  var logButton = document.querySelector('.log-button');
  var main = document.querySelector('.main');
  var startTimer = document.querySelector('.start');
  var timerDisplay = document.querySelector('.minutes-seconds');
  startTimer.addEventListener('click', runTimer);
  logButton.addEventListener('click', addCard);

// Starts timer on click of start button.
  function runTimer(event) {
    counter(seconds);
    selectCategory(startColor);
}

// Adds chosen categories color to the start button.
  function selectCategory(startColor) {
    if (startColor === 1) {
      startTimer.classList.add('study-color');
    }
    if (startColor === 2) {
      startTimer.classList.add('meditate-color');
    }
    if (startColor === 3) {
      startTimer.classList.add('exercise-color');
    }
}

// Timer countdown from time entered by user.
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

// Displays timer countdown and congratulatory messages.
  function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    var remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : '' }${remainderSeconds}`;
    timerDisplay.textContent = display;
    if (remainderSeconds === -0 && minutes === 0){
      startTimer.innerHTML = 'Task Complete!';
      timerDisplay.innerHTML = 'Good Job!';
      logButton.innerHTML += `<button type="button" class="log">log-activity</button>`;
    }
}

// Adds past activity cards with information based on user inputs.
  function addCard(){
    if (startColor === 1) {
      var category = 'Study';
    } if (startColor === 2) {
      var category = 'Meditate';
    } if (startColor === 3) {
      var category = 'Exercise';
    }
    var mainTemplate =
    `<h2 class='main-title'>Past Activities</h2>
    <div class='card'>
      <h3>${category}</h3>
      <h5>${inputMinutes.value} Min ${inputSeconds.value} Seconds</h5>
      <h3>${goalInput.value}</h4>
     </div>`;
     main.innerHTML = mainTemplate;
  }
};

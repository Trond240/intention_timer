var minutesInput = document.querySelector('.minutes');
var secondsInput = document.querySelector('.seconds');
var goalInput = document.querySelector('.goal');
var startActivityBtn = document.querySelector('.start-activity');
var asideContainer = document.querySelector('.aside-form');
var alertText = document.querySelector('.alert-text');
var formInput = document.querySelectorAll('input');
var inputGoal = document.getElementById('goal-input');
var inputMinutes = document.getElementById('minutes-input');
var inputSeconds = document.getElementById('seconds-input');
var errorMessage = document.querySelector('.error-div');


// Function for input error
startActivityBtn.addEventListener('click', startError);
function startError() {
  if (inputGoal.value === '' ||
      inputMinutes.value === '' ||
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
// classList.remove & input1.style.border = 'solid 2px #FF0000';

// Functions to change activity button colors

var studyButton = document.querySelector('.study-button');

startActivityBtn.addEventListener('click', startError);

function studyColor(){
  event.preventDefault();
  studyButton.style.borderColor = '#B3FD78';
  studyButton.style.color = '#B3FD78';
  studyButton.style.backgroundImage = "url('study-active.svg')";
};

var exerciseButton = document.querySelector('.exercise-button');

exerciseButton.addEventListener('click', exerciseColor);

function exerciseColor(){
  event.preventDefault();
  exerciseButton.style.borderColor = '#FD8078';
  exerciseButton.style.color = '#FD8078';
  exerciseButton.style.backgroundImage = "url('exercise-active.svg')";
};

var meditateButton = document.querySelector('.meditate-button');

meditateButton.addEventListener('click', meditateColor);

function meditateColor(){
  event.preventDefault();
  meditateButton.style.borderColor = '#C278FD';
  meditateButton.style.color = '#C278FD';
  meditateButton.style.backgroundImage = "url('meditate-active.svg')";
};

// function for timer

startActivityBtn.addEventListener('click', setTimer);
let countdown;

function setTimer(event) {
  var sec = parseInt(inputSeconds.value);
  var min = parseInt(inputMinutes.value) * 60;
  var time = (min + sec);
  showTimer(time);
}

function showTimer(seconds) {
  const minutes1 = inputMinutes.value;
  const remainderSeconds = seconds % 60;
  console.log(minutes1);
  console.log(seconds);
  var timerTemplate =
  `<aside class='aside-timer'>
      <section class='timer-page'>
        <h2 class='timer-heading'>${goalInput.value}</h2>
        <h2 class='minutes-seconds'>${minutes1}:${remainderSeconds < 10 ? '0' : '' }${remainderSeconds}</h2>
        <button type="button" class="start">Start</button>
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

  const timerDisplay = document.querySelector('.minutes-seconds');

  function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : '' }${remainderSeconds}`;
    timerDisplay.textContent = display;
    console.log({minutes, remainderSeconds});
  }
};

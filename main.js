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
var timerBtn = document.querySelector('.study');
var studyButton = document.querySelector('.study-button');
var exerciseButton = document.querySelector('.exercise-button');
var meditateButton = document.querySelector('.meditate-button');



// creater additonal properties in css.
studyButton.addEventListener('click', function(){
  event.preventDefault();
  studyButton.classList.toggle('active-study-button');
  // timerBtn.classList.toggle('study-color');
  // timerButton.classList.remove('');
  // timerButton.classList.remove('');
  exerciseButton.classList.remove('active-exercise-button');
  meditateButton.classList.remove('active-meditate-button');
});

meditateButton.addEventListener('click', function(){
  event.preventDefault();
  meditateButton.classList.toggle('active-meditate-button');
  // timerBtn.classList.toggle('study-color');
  // timerButton.classList.remove('');
  // timerButton.classList.remove('');
  studyButton.classList.remove('active-study-button');
  exerciseButton.classList.remove('active-exercise-button');
});

exerciseButton.addEventListener('click', function(){
  event.preventDefault();
  exerciseButton.classList.toggle('active-exercise-button');
  // timerBtn.classList.toggle('study-color');
  // timerButton.classList.remove('');
  // timerButton.classList.remove('');
  studyButton.classList.remove('active-study-button');
  meditateButton.classList.remove('active-meditate-button');
});

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

function showTimer(seconds) {
  var timerTemplate =
  `<aside class='aside-timer'>
      <section class='timer-page'>
        <h2 class='timer-heading'>${goalInput.value}</h2>
        <h2 class='minutes-seconds'>${seconds}</h2>
        <button type="button" class="start">Start</button>
      </section>
    </aside>`;
  asideContainer.innerHTML = timerTemplate;

  var startTimer = document.querySelector('.start');
  startTimer.addEventListener('click', counter);

  function counter(seconds) {
    var seconds = inputSeconds.value;
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


startActivityBtn.addEventListener('click', setTimer);
let countdown;

function setTimer(event) {
  showTimer(inputSeconds.value);
}

function alertMsg() {
  alert('Time has expired!!!');
}

function timeAlert(){
  if (remainderSeconds.textContent ==! 0) {
  alertMsg();
  }
};

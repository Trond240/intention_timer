var studyButton = document.querySelector('.study-button');

var meditateButton = document.querySelector('.meditate-button');
var excerciseButton = document.querySelector('.excercise-button');
var minutesInput = document.querySelector('.minutes');
var secondsInput = document.querySelector('.seconds');
var goalInput = document.querySelector('.goal');
var startActivityBtn = document.querySelector('.start-activity');
var asideContainer = document.querySelector('.aside-form');


document.querySelector('.start-activity').addEventListener('click', showTimer);


function showTimer() {
  event.preventDefault();
  var timerTemplate = `
<aside class='aside-timer'>
    <section class='timer-page'>
      <h2>${goalInput.value}</h2>
      <h1 class='minutes-seconds'>${minutesInput.value}:${secondsInput.value}<h2>
      <button class="Start">Start</button>
    </section
  </aside>
  `;

  var startTimer = document.querySelector('.start-activity');
  asideContainer.innerHTML = timerTemplate;
studyButton.addEventListener('click', studyColor);

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

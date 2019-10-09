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
};

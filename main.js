var studyButton = document.querySelector('.study-button');
var meditateButton = document.querySelector('.meditate-button');
var exerciseButton = document.querySelector('.exercise-button');
var minutesInput = document.querySelector('.minutes');
var secondsInput = document.querySelector('.seconds');
var goalInput = document.querySelector('.goal');
var startActivityBtn = document.querySelector('.start-activity');
var asideContainer = document.querySelector('.aside-form');
var alertText = document.querySelector('.alert-text')
var formInput = document.querySelectorAll('input')
var input1 = document.getElementById('input-1');
var input2 = document.getElementById('input-2');
var input3 = document.getElementById('input-3');



document.querySelector('.start-activity').addEventListener('click', showTimer);
studyButton.addEventListener('click', studyColor);
startActivityBtn.addEventListener('click', startError);
// document.querySelector('.start-activity').addEventListener('click', emptyBoxError);



// function emptyBoxError() {
//     alertText.innerHTML = `<img src="warning.svg"
//       alt="error message icon" class="alert-img"> Missing input information`;
//     if (minutesInput.value === '') {
//       minutesInput.style.border = '1px solid red';
//     } else {
//       minutesInput.style.border = '';
//     };
//     if (secondsInput.value === '') {
//       secondsInput.style.border = '1px solid red';
//     } else {
//       secondsInput.style.border = '';
//     };
//   };
function startError(){
  if (input1.value === '') {
      alert('Please fill all fields before continuing.');
    }
};


function showTimer() {
  event.preventDefault();
  var timerTemplate = `
<aside class='aside-timer'>
    <section class='timer-page'>
      <h2 class ='timer-heading'>${goalInput.value}</h2>
      <h2 class='minutes-seconds'>${minutesInput.value}:${secondsInput.value}</h2>
      <button class="Start">Start</button>
    </section
  </aside>
  `;

  var startTimer = document.querySelector('.start-activity');
  asideContainer.innerHTML = timerTemplate;
};


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

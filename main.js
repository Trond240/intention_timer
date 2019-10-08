var studyButton = document.querySelector('.study-button');

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

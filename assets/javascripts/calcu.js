var numbers = ""
var memory = ""

var calcuButtons = document.getElementsByClassName('calcu-button')
  for(var i = 0; i < calcuButtons.length; i++) {
    var calcuButton = calcuButtons[i];
    calcuButton.addEventListener('click', function(){
        numbers += this.innerText;
      putNumber(numbers);
      addEggAdderMath(numbers);
  });
}

// printing on the screen
var screen = document.getElementById('screen');
function putNumber(number) {
  screen.innerHTML = number;
}

// getting result
var equalButton = document.getElementById('equal-button');

equalButton.addEventListener('click', function(){
  numbers = eval(numbers);
  putNumber(numbers);
  if(screen.innerHTML === 'Infinity' || screen.innerHTML === 'NaN') {
    putNumber('error');
    numbers = ""
  }
});

// specific buttons
var acButton = document.getElementById('ac-button');

acButton.addEventListener('click', function(){
  numbers = ""
  putNumber(0);
});

var percentageButton = document.getElementById('percentage-button');
percentageButton.addEventListener('click', function(){
  putNumber(numbers / 100);
  numbers = numbers / 100;
});

var rootButton = document.getElementById('root-button');
rootButton.addEventListener('click', function(){
  putNumber(Math.sqrt(numbers));
  numbers = Math.sqrt(numbers);
});

var powerButton = document.getElementById('power-button');
powerButton.addEventListener('click', function(){
  putNumber(numbers * numbers);
  numbers = numbers * numbers;
});

var sineButton = document.getElementById('sine-button');
sineButton.addEventListener('click', function(){
  putNumber(Math.sin(numbers));
  numbers = Math.sin(numbers);
});

var cosineButton = document.getElementById('cosine-button');
cosineButton.addEventListener('click', function(){
  putNumber(Math.cos(numbers));
  numbers = Math.cos(numbers)
});

var tangentButton = document.getElementById('tangent-button');
tangentButton.addEventListener('click', function(){
  putNumber(Math.tan(numbers));
  numbers = Math.tan(numbers)
});

var piButton = document.getElementById('pi-button');
piButton.addEventListener('click', function(){
  putNumber(Math.PI);
  numbers += Math.PI;
});


// memory
var plusminusButton = document.getElementById('plusminus-button');
plusminusButton.addEventListener('click', function(){
  putNumber(-numbers);
  numbers = -numbers
});

var mPlusButton = document.getElementById('m-plus-button');
mPlusButton.addEventListener('click', function(){
  memory = eval(memory + screen.innerHTML);
});

var mMinusButton = document.getElementById('m-minus-button');
mMinusButton.addEventListener('click', function(){
  memory = eval(memory - screen.innerHTML);
});

var mRecButton = document.getElementById('m-rec-button');
mRecButton.addEventListener('click', function(){
  numbers += memory;
  putNumber(memory);
});
var mClearButton = document.getElementById('m-clear-button');
mClearButton.addEventListener('click', function(){
  memory = "";
});

// history

function addEggAdderMath() {
  var input = screen.innerHTML;
  var historyList = document.getElementById('history-list');
  var li = document.createElement('LI');
  var text = document.createTextNode(input);
  li.appendChild(text);
  historyList.appendChild(li);
}

var historyButton = document.getElementById('history-button')

historyButton.onclick = function() {
  var div = document.getElementById('show-history');
  if (div.style.display !== 'none') {
      div.style.display = 'none';
  }
  else {
      div.style.display = 'block';
  }
};

// we're expecting to see an alert when we click the button

document.getElementById('my-btn').addEventListener("click",function(e){
    alert('you clicked the button!');
});

// we're expecting to see the font color of all the paragraphs turn blue
var paragraphs = document.getElementsByClassName('lorem');

for (var i = 0; i < paragraphs.length; i++) {
    var p = paragraphs[i];
    p.style.color = 'blue';
}

// expect to see an alert

var myButton = document.getElementById('my-btn2');
var alertMe = function (event) {
    alert('hey! you clicked a thing');
};
myButton.addEventListener('click', alertMe);

// the 1 button doesn't work
// the 2 button replaces whatever is in the display
// the 5 button breaks everything
// the clear button doesn't do anything

// food for thought: it looks like an awful lot of duplication in our code for
// selecting and adding an event listener to all the buttons

function clearClicked (e) {
    display.value = '';
}

var display = document.getElementById('display');
var clear   = document.getElementById('clear');

var btn = document.getElementsByClassName('btn');

var addEvent = function (e){
	display.value += this.innerText;
};
for (i = 0; i < btn.length; i++){
	var button = btn[i];
	button.addEventListener("click", addEvent);
}

clear.addEventListener('click', clearClicked);


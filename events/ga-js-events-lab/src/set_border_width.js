// This is the button click handler. Function that gets called when
// a button is clicked.
var setBorderWidth = function() {
  document.getElementById("img1").style.borderWidth = this.getAttribute("data-width") + "px";
}

// get button elements
var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');

button1.addEventListener("click",setBorderWidth,false);
button2.addEventListener("click",setBorderWidth,false);

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext('2d');
var mouseEvent = "";
var circleColour = document.getElementById("colourInput").value;
var lineWidth = document.getElementById("widthInput").value;
var circleDiameter = document.getElementById("diameterInput").value;
var currentXPosition;
var currentYPosition;
var lastXPosition;
var lastYPosition;
canvas.addEventListener("mousedown", mouseDown);
canvas.addEventListener("mousemove", mouseMove);
canvas.addEventListener("mouseup", mouseUp);
canvas.addEventListener("mouseleave", mouseLeave);
function mouseDown(e){
  circleColour = document.getElementById("colourInput").value;
  lineWidth = document.getElementById("widthInput").value;
  circleDiameter = document.getElementById("diameterInput").value;
}
function mouseMove(e){
  currentXPosition = e.clientX - canvas.offsetLeft;
  currentYPosition = e.clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = circleColour;
    ctx.lineWidth = lineWidth;
    ctx.arc(currentXPosition, currentYPosition, circleDiameter / 2, 0, 2*Math.PI);
    ctx.stroke();
  lastXPosition = currentXPosition;
  lastYPosition = currentYPosition;
}
function mouseUp(e){
  mouseEvent = "mouseup";
}
function mouseLeave(e){
  mouseEvent = "mouseleave";
}
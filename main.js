var mouse_event="empty";
var last_x, last_y;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
width_line=1;
canvas.addEventListener("mousedown", mymousedown);
function mymousedown(e){
    color=document.getElementById("color").value;
    width_line=document.getElementById("width_line").value;
    mouse_event="mousedown";
}
canvas.addEventListener("mousemove", mymousemove);
function mymousemove(e){
current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
current_position_of_mouse_y=e.clientY-canvas.offsetTop;
if (mouse_event== "mousedown") {
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width_line;
    console.log("last position of x and y cordinates are  ");
    console.log("x=  "+ last_x+ "y=  "+ last_y);
    ctx.moveTo(last_x, last_y);
    console.log("current position of x and y cordinates are  ");
    console.log("x=  "+ current_position_of_mouse_x+ "y=  "+ current_position_of_mouse_y);
    ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
    ctx.stroke();
}
last_x=current_position_of_mouse_x;
last_y=current_position_of_mouse_y;
}
canvas.addEventListener("mouseup", mymouseup);
function mymouseup(e){
    mouse_event="mouseup";
}
canvas.addEventListener("mouseleave", mymouseleave);
function mymouseleave(e){
    mouse_event="mouseleave";
}
function clearArea() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
}
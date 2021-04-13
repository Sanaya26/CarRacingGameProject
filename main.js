canvas= document.getElementById('myCanvas');
ctx= canvas.getContext ("2d");
background_image = track.jpg
racecar1_height=300; racecar1_width=300;
racecar1_image = "racecar1.jpg";

function add() {
background_imagetag  = new Image ();
background_imagetag.onload  =  uploadbackground; 
background_imagetag.src=background_image;
racecar1_x=10;
racecar1_y=10;


racecar1_imagetag  = new Image ();
racecar1_imagetag.onload  =  racecar1; 
racecar1_imagetag.src=racecar1_image;
}

function uploadbackground() {
ctx.drawImage (background_imagetag,0,0,canvas.width, canvas.height);
}

function uploadracecar1() {
    ctx.drawImage (racecar1_imagetag, racecar1_x,racecar1_y, racecar1_width, racecar1_height);
    }

    window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
keyPressed = e.keyCode; console.log(keyPressed);
if (keyPressed ==  '38') {up ();}
if (keyPressed ==  '40') {down ();}
if (keyPressed ==  '37') {left ();}
if (keyPressed ==  '39') {right ();}
}

function up() {
if (racecar1_y >= 0) {
racecar1_y = racecar1_y-10;
uploadbackground(); 
uploadracecar1();}
}
function down() {
if (racecar1_y <=500) {
racecar1_y = racecar1_y+10;
uploadbackground ();
uploadracecar1();}
}

function right() {
if (racecar1_x>=0) {
racecar1_x = racecar1_x+10;
uploadbackground();
uploadracecar1();}
}

function left() {
if (racecar1_x<=700) {
racecar1_x = racecar1_x-10;
uploadbackground ();
uploadracecar1 ();}
}



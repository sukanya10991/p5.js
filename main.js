function preload(){

}
function setup(){
    canvas=createCanvas(640, 480);
    canvas.position(110, 250);
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video, 0, 0, 640, 480);
    fill(255,0,0);
    stroke(255,0,0);
    translate(70, 75);
    noStroke();
    for (let i = 0; i < 10; i ++) {
      ellipse(0, 30, 20, 90);
      rotate(PI/5);
    }
    circle(100, 10, 50);
    circle(150, 10, 50);
    circle(200, 10, 50);
    circle(250, 10, 50);
    circle(300, 10, 50);
    circle(350, 10, 50);
    circle(400, 10, 50);
    translate(490, 0);
    noStroke();
    for (let i = 0; i < 10; i ++) {
      ellipse(0, 30, 20, 90);
      rotate(PI/5);
    }
}
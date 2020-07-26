video = "";

function preload(){
    video.createVidoe('video.mp4');
    video.hide();
}

function setup() {
    canvas.createCanvas(480, 380);
    canvas.center();
}

function draw() {
    image(video, 0, 0, 480, 380);
}

function start()
{
    objectDetector = ml5.objectDetector('cocosd', modelLoaded);
    document.getElemenTById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
    vidoe.loop();
    video.speed(1);
    video.volume(0);
}
noseX=0;
noseY=0;

function preload(){
    clown_nose=loadImage('https://i.postimg.cc/h4QFLFZX/Clown-nose.png')

}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300)
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);

}
function draw(){
     image(video,0,0,300,300);
    fill(255,0,0);
    stroke(0,255,0);
    circle(noseX,noseY,20);
}
function take_snapshot(){
   save('KKMJPKJSBTS.png');
}

function modelLoaded(){
    console.log('Pose net is initialised ')
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX= "+ noseX);
        console.log("noseY= "+ noseY);
    }
}
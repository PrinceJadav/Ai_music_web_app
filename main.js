 Peter_pan_song="";
 harry_potter_theme_song="";

leftWrist_X = 0;
leftWrist_Y = 0;
rightWrist_x = 0;
rightWrist_y = 0;


 function setup(){
    canvas = createCanvas(600,530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide;

    ml5.poseNet(modelLoaded);
    sposeNet.on('pose',gotPoses)
 }

 function preload(){
    Peter_pan_song = loadsound("music1.mp3.mp3");
    harry_potter_theme_song = loadsound("music1.mp3.mp3");
 }
 function draw(){
    image(video,0,0,600,530);
 }

 

function modelLoaded(){
    console.log("PoseNet is initialized")
}

function gotPoses(results){
    if(results.lenght > 0){
        console.log(results);


        leftWrist_x = results[0].pose.leftWrist.x;
        leftWrist_y = results[0].pose.leftWrist.y;
        console.log("leftWrist_x = "+LeftWrist_x+" leftWrist_y = "+leftWrist_y);

        rightWrist_x = results[0].pose.rightWrist.x;
        rightWrist_y = results[0].pose.rightWrist.y;
        console.log("rightWrist_x = "+rightWrist_x+" rightWrist_y = "+rightWrist_y);
    }
}
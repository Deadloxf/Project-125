leftWrist_x = 0;
rightWrist_x = 0;
difference = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(400,400);
    video.position(10,50);

    canvas = createCanvas(800,400);
    canvas.position(500,170);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotposes);
}

function draw() {
    background("#00abba");
}

function modelLoaded() {
    console.log("poseNet is initialized and loaded");
}

function gotposes(results, error) {
    if(error) {
        console.error(error);
    }

    if(results.length > 0) {
        console.log(results);

        console.log("rightWrist_x = " + results[0].pose.rightWrist.x + "rightWrist_y = " + results[0].pose.rightWrist.y);
        console.log("leftWrist_x = " + results[0].pose.leftWrist.x + "leftWrist_y = " + results[0].pose.leftWrist.y);
    }
}

function draw() {
    background("black");
    document.getElementById("font_size").innerHTML = "Font Size Of The Text Will Be - " + difference + "px";
    textSize(difference);
    fill("#00ff0a");
    text('Yo wassup !!',50,400);
}

function modelDone() {
    console.log("PoseNet Is Initialized And Loaded");
}

function gotposes(results,error) {
    if(error) {
        console.error(error);
    }
    if(results.length > 0) {
        console.log(results);

        leftWrist_x = results[0].pose.leftWrist.x;
        rightWrist_x = results[0].pose.rightWrist.x;

        difference = floor(leftWrist_x - rightWrist_x);

        console.log("rightWrist_x = "+results[0].pose.rightWrist.x + " rightWrist_y = "+results[0].pose.rightWrist.y);
        console.log("leftWrist_x = "+results[0].pose.leftWrist.x + " leftWrist_y = "+results[0].pose.leftWrist.y);
    }
}
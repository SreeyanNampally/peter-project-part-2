nosex = 0;
nosey = 0;
lwx = 0;
rwx = 0;

function setup(){
    canvas = createCanvas(500,500)
    canvas.center()
    video = createCapture(VIDEO);
    posenet = ml5.poseNet(video, modelloaded)
    posenet.on("pose", gotposes)
}

function modelloaded(){
    console.log("modelloaded")
}

function gotposes(results){
if(results.length>0){
    console.log(results);
    nosex = results[0].pose.nose.x
    nosey = results[0].pose.nose.y
    lwx = results[0].pose.leftWrist.x
    rwx = results[0].pose.rightWrist.x

}
}

function draw(){
    difference =  lwx - rwx
    console.log(difference)
    background("black");
    textSize(difference);
    fill("lightgreen")
    text("peter", nosex, nosey)
    document.getElementById("size").innerHTML = difference.toFixed(0);
}

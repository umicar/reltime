
function preload(){

}

function setup(){
canvas=createCanvas(325,240);
//canvas.center();
canvas.position(500,330);
img=createCapture(VIDEO);
img.hide();
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/n3Gdfs7-I/model.json",modelLoaded);
}

function modelLoaded(){
    console.log("Model Loaded");
}

function draw(){
image(img,0,0,325,240);
classifier.classify(img,gotResult);
}

function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_object").innerHTML= results[0].label;
        document.getElementById("result_accuracy").innerHTML= results[0].confidence.toFixed(3);
    }
}
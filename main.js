var my_status = "";

var x = 0;
var y = 0;
var width = 0;
var height = 0;
var object_name = "";
var object_accuracy = 0;
var objects = [];

function preload() {
    image_dog_cat = loadImage("dog_cat.jpg");
}

function setup() {
    canvas = createCanvas(700, 500);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd", modelloaded);
    document.getElementById("Status").innerHTML = "Status :  Loading Model";
}

function draw() {
    image(image_dog_cat, 0, 0, 700, 500);
    noFill();
    stroke("green");
    rect(330, 40, 300, 450);
    fill("green");
    textSize(30);
    text("Cat", 340, 70);


    noFill();
    stroke("green");
    rect(130, 40, 300, 450);
    fill("green");
    textSize(30);
    text("Dog", 140, 70);
}

function modelloaded() {
    console.log(" Model is Loaded ");
    document.getElementById("Status").innerHTML = "Status :  Detecting Objects";
    objectDetector.detect(image_dog_cat, got_results);

}

function got_results(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        objects = results;
        my_status = true;

    }

}


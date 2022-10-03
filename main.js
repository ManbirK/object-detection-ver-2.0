var obj_status = "";
function preload() {
    image_dog_cat = loadImage("dog_cat.jpg");
}

function setup() {
    canvas = createCanvas(700, 500);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd", model_Loaded);
    document.getElementById("Status").innerHTML = "Status : Loading Model";
}

function draw() {
    if (obj_status != "") {

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

}

function model_Loaded() {
    console.log("Model Is loaded");
    obj_status = true;
    document.getElementById("Status").innerHTML = "Status : Detecting Objects";
    objectDetector.detect(image_dog_cat,got_Results);

}

function got_Results(error,results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
    }
 

}


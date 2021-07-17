status = "";
objects = [];
function preload(){
    img = loadImage("dogs.jpg");
}
function setup(){
    canvas = createCanvas(500,600);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}
function modelLoaded(){
        console.log("Model Loaded!");
        status = "true";
        objectDetector.detect(img, gotResult);
}
function gotResult(error, results){
    if(error){
         console.error(error);
     }
    console.log(results);
    objects = results;
}
function draw(){
    image(img, 0, 0, 500, 600);
    if(status != ""){
        for(i = 0; i<objects.length; i++){
            valInPercent = floor(objects[i].confidence * 100);
            fill("red");
            text(objects[i].label, objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("blue");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
            document.getElementById("NumberOfObjects").innerHTML = "There are 3 big objects from which CoCo SSD has detected 2 objects.";
        }
    }
}
function back(){
    window.location = "index.html";
}
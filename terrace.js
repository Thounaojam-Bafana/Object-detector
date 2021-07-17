status = "";
objects = [];
function preload(){
    img = loadImage("terrace.jpg");
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
        document.getElementById("NumberOfObjects").innerHTML = "There are 10 main objects from which CoCo SSD didn't detect a single object";
        for(i = 0; i<objects.length; i++){
            valInPercent = floor(objects[i].confidence * 100);
            fill("red");
            text(objects[i].label, objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("blue");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}
function back(){
    window.location = "index.html";
}
img="";
anything="";

function preload()
{
    img = loadImage('fresh-fruit-basket-wooden-table-42825561.jpg');
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = 'Status: Detecting Objects';
}

function modelLoaded()
{
    console.log("Model Loaded!");
    objectDetector.detect(img, gotResult);
}

function draw()
{
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Fruit Basket", 45,75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350);
}
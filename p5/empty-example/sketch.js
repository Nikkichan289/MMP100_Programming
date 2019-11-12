var diaml = 0;
var r= 200;
var g = 50;
var b = 25;


function setup() {
    // put setup code here
    createCanvas(500, 500);
}

function draw() {



    // put drawing code here
    background("#FFFF00");

    noStroke();
    fill(r, g, b);
    ellipse(250, 120, 150, 150);
    fill(r/2, g/4, b/2);
    ellipse(250, 210, 150, 150);

    fill("#DEB887");
    triangle(250, 500, 315, 250, 185, 250);


    fill("#9400D3");
    textSize(35);
    textFont("Helvetica");
    text("Sweet Sensation", 12, 30);
}


function mousePressed() {
    r = random(0, 255);
    g = random(0, 255);
    b = random(0, 255);
    //        noStroke();
}

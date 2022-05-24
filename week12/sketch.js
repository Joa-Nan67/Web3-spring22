let posX;
let posY; 

let velX;
let velY;

let radius;
let circleClr;

//ui
let sliderHue;
let sliderSize;
let clickCounter;
let clickMiss;

function setup(){
    let myCanvas = createCanvas(800,400);
    myCanvas.parent('canvasP');

    colorMode(HSB, 160, 100, 100);
    
    sliderHue = createSlider(0,360,20,15);
    sliderHue.parent('canvasIT');
    sliderHue.style('width','80px');

    sliderSize = createSlider(0,360,20,15);
    sliderSize.parent('canvasITT');
    sliderSize.style ('width','80px');

    posX = width/2;
    posY = height/2;
    
    velX = 3;
    velY = 2;

    radius = 25 ;
    circleClr = color(205,50,211);

    clickCounter = 0;
    clickMiss = 0;
}

function draw(){
    background(40, 70, 102);

    noStroke();
    circleClr= color(sliderHue.value(),70,100)
    const s = sliderSize.value();
    radius = 50 + s;
    fill(circleClr)
    circle(posX ,posY , radius * 2);
    if(posX + radius >= width || posX - radius <= 0){
        velX = velX * -1
    }
    if(posY + radius >= height || posY - radius <= 0){
        velY = velY * -1
    }
    posX += velX;
    posY += velY;

    noFill();
    stroke(140,50,0);
    strokeWeight(3);
    rect(5,5,117,61);

    textSize(16);
    strokeWeight(1);
    fill(100,100,100)
    text('Win',9,25)
    text(clickCounter, 78, 28);


    textSize(16);
    strokeWeight(1);
    fill(100,100,100)
    text('Miss',9,60)
    text(clickMiss, 78, 60);

}// end of draw

function mouseReleased(){
    if(dist(mouseX, mouseY, posX, posY) < radius ){
        
        clickCounter++;
        if(velX > 0){
            velX++;
        }
        else{
            velX--;
        }

        if(velY > 0){
            velY++;
        }
        else{
            velY--;
        }
        
    }
    else{
        clickMiss++;
    }
}
let angle=0;
let angleCircle=0;

let mySoundA;
let circleColor;
let squareColor;
let strokeColor;

let amp;

let isPlaying = false;
let cnv;

let circleBoost = 1;

function preload(){
  mySoundA = loadSound('D.mp3');
  mySoundB = loadSound('E.mp3');
  mySoundC = loadSound('F.mp3');
  mySoundD = loadSound('G.mp3');
  mySoundE = loadSound('A.mp3');
}

function setup(){
	cnv = createCanvas(600,600);

	angleMode(DEGREES);  // using degrees rather than the default radians
	rectMode(CENTER); // draw from the centre of the rectangle rather than the default top left corner

  circleColor = color(152, 100, 217); // default color state
  squareColor = color(100, 123, 217); 
  strokeColor = color(255, 150);

  cnv.mousePressed(canvasPressed);

  textAlign(CENTER);
  textSize(30);
  strokeWeight(4);
  stroke(255);
}

function draw(){
background(0);

  if (!isPlaying){
    console.log('not playing');
    fill(0, 0, 255); // red coloured text
    text('play the piano', width/2, height/2);
    return; // stops code from running befoer mouse clicked
  }

translate(width/2, height/2);
circleBoost *= 0.92;
circleBoost = max(circleBoost,1);

// ------------------------
//Big rotating squares
push(); 
stroke(strokeColor); // white stroke
strokeWeight(4); 
noFill(0);
let tempAngle = angle;

//draw 20 squares
for (let i = 0; i <20; i++) {

  rotate(tempAngle);
  scale(0.9); //shrink a little each iteration
  rect(0,0,width,height); // draw a rect 
  tempAngle +=0.45; // increase roation 
  }
  pop(); 
// ------------------------

 angle += 0.02; // animates rotation
 angleCircle += 0.01; 

// ------------------------
// Little circles
  push(); 
  for (let j = 0; j <360; j += 22.5){
  rotate(j);

  push();
  fill(circleColor);
  noStroke();
	for(let i = 0; i < 70; i++){
	scale(0.9);
	rotate(angleCircle);
	let size = 30 * circleBoost;
  ellipse(width, 0, size);
	}
  pop(); 
  }
// ------------------------

// ------------------------
// Small Squares
push();
noStroke();
fill(squareColor);

  for(let i = 0; i <70; i++){
  scale(0.95);
  rotate(angle);
  square(300,0, 50);
  }
  pop();
// ------------------------

}

// key pressed start

function canvasPressed(){
  if (!isPlaying) {
    isPlaying = true;
  } else {
    isPlaying = false;
    
    angle = 0;
    angleCircle = 0;  //this resets animation values

}
}

// KEYS PRESSED

function keyPressed(){
  if (key === 'q'|| key === 'Q'){
    mySoundA.play();
    circleColor = color(235, 33, 50);
    circleBoost = 2.5;
  } else if (key === 'w'|| key === 'W'){
    mySoundB.play();
    squareColor = color(235, 33, 171);
  } else if (key === 'e'|| key === 'E'){
    mySoundC.play();
    strokeColor = color(196, 94, 235);
  } else if (key === 'r'|| key === 'R'){
    mySoundD.play();
    circleColor = color(77, 138, 234);
    circleBoost = 2.5;
  } else if (key === 't'|| key === 'T'){
    mySoundE.play();
    squareColor = color(106, 235, 146);
  }
}





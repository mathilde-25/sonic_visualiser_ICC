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
  mySoundE = loadSound('As.mp3');
  // mySoundF = loadSound('D7.wav');
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
  } else if (key === 'y'|| key === 'Y'){
    mySoundF.play();
    strokeColor = color(252, 255, 153);
  }
}



//OLD EGYPTIAN PROJ AS BACKUP hi


// let mySound;
// let amp;
// let fft;
// let isPlaying = false; //paused state
// let angle = 0;

// function preload() {
//   mySound = loadSound('desert2music.wav'); //make sure in correct file
// }


// function setup() {
//   let cnv = createCanvas(500,500);
//   cnv.mousePressed(canvasPressed);
//   textAlign(CENTER);
//   textSize(30);
//   strokeWeight(4);
//   stroke(255);

//   amp = new p5.Amplitude();
//   amp.setInput(mySound);

//   fft = new p5.FFT();
//   fft.setInput(mySound);
// }


// function draw() {
//  background(0,50);

//   if (!isPlaying){
//     console.log('not playing');
//     fill(255, 0, 0); // red coloured text
//     text('tap here to play', width/2, height/2);
//     return; //skip the visualiser
//   }

//   let spectrum = fft.analyze();
//   console.log(spectrum);

//   let treble = fft.getEnergy("treble");
//   let mid = fft.getEnergy("mid");
//   let bass = fft.getEnergy("bass");

//   let mappedTreble = map(treble, 0, 50, 0, 100); 
//   let mappedMid = map(mid, 0, 255, -200, 100); 
//   let mappedBass = map(bass, 0, 255, 50, 200); 


//   translate(width/2,height/2); // move point of origin to centre of canvas

//   // LITTLE POINTS 
//   let noOfPoints = 20; //total no of points to draw

//   for (let i = 0; i < noOfPoints; i++){ 
//     push();
//     rotate(TWO_PI/noOfPoints);
    

//   // treble
// strokeWeight(6);
// stroke(255,255,0);
// point(mappedTreble, height/4);

// // mid
// push(); //push pop allows mid treble to rotate without rotating bass too
// rotate(frameCount * 0.01);
// strokeWeight(6);
// stroke(0,0,255);
// point(mappedMid, height/4);
// pop();
// strokeWeight(2);
// // line(0, height/4, scaleMidLine, height);


// // BASS TRIANGLE
// strokeWeight(3);
// stroke(0,0,255);
// noFill();

// for (let k = 0; k < 4; k++) {
//   push(); //isolate triangle
//   rotate(TWO_PI/2* k); //small rotation fr each triangle
//   strokeWeight(1);
//   stroke(255);
//   noFill();
//   beginShape();
//   for (let j = 0; j < 3; j++){ //original triangle vertices
//     let angle = j * TWO_PI / 6;
//     let x = cos(angle) * mappedBass;
//     let y = sin(angle) * mappedBass;
//     vertex(x, y);
//   }
//   endShape(CLOSE);
//   pop(); //restore state so triangles don't overlap
// }

// // let scaleMidLine = map(mid, 0, 255, 0, width); 
    
//   }

// }

// function canvasPressed(){
//   if (!isPlaying) {
//     // start playing
//     mySound.play();
//     mySound.loop();
//     isPlaying = true;
//   } else {
//     // stop and reset
//     mySound.stop();
//     isPlaying = false;

//     // optional: reset amp/fft
//     amp.setInput(mySound);
//     fft.setInput(mySound);
//   }
// }



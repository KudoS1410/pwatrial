// //draw a spinning octahedron
// let octahedron;

// function preload() {
//   octahedron = loadModel('./untitled1.obj', true);
// }

// function setup() {
//   createCanvas(800, 600, WEBGL);
// }

// function draw() {
//   background(0);
//   rotateX(frameCount * 0.01);
//   rotateY(frameCount * 0.01);
//   rotateZ(frameCount*0.01);
//   model(octahedron);
// }
// function mouseWheel(event) {
//     scale(event.delta);
//     console.log(event.delta)
// }

let sliderGroup = [];
let X;
let Y;
let Z;
let centerX;
let centerY;
let centerZ;
let h = 20;
let z = 1;
let move = 1;

function preload(){
    octahedron = loadModel("./bat.obj", true)
}

function setup() {

  createCanvas(800, 600, WEBGL);
  //create sliders
  for (var i = 0; i < 6; i++) {
    if (i === 2) {
      sliderGroup[i] = createSlider(10, 400, 200);
    } else {
      sliderGroup[i] = createSlider(-400, 400, 0);
    }
    h = map(i, 0, 6, 5, 85);
    sliderGroup[i].position(10, height + h);
    sliderGroup[i].style('width', '800px');
  }
}

function draw() {
  background(60);
  // assigning sliders' value to each parameters
  X = sliderGroup[0].value();
  Y = sliderGroup[1].value();
  Z = sliderGroup[2].value();
  centerX = sliderGroup[3].value();
  centerY = sliderGroup[4].value();
  centerZ = sliderGroup[5].value();

  

  camera(X, Y, Z, centerX, centerY, centerZ, 0, 1, 0);
  stroke(255);
  fill(0, 102, 94);
  scale(z);
  if(move == 1){
  rotateX(map(mouseY, 0, height, 4 * PI/2, -4 * PI / 2))
  rotateY(map(mouseX, 0, width, 4 * PI/2, -4 * PI / 2))
  }
  else{
  rotateY(PI/2)
  rotateX(-PI)
  }
  model(octahedron);
}

function mouseWheel(event) {
    z += 0.005 *-1* event.delta;
    z = constrain(z, 0.05, 9);
    // z += event.delta;
    // console.log(event.delta)
}

function keyReleased(){
    if(keyCode == 77){
        move = !move;
    }
}

// var zoom = 1.00;
// var zMin = 0.05;
// var zMax = 9.00;
// var sensativity = 0.005;
//  
// function preload(){
//     octahedron = loadModel('./untitled1.obj', true);
// }

// function setup() {
//   createCanvas(800,600, WEBGL);
//   rectMode(CENTER);
// }
// function draw() {
//   background(237, 34, 93);
// //   translate(width/2,height/2);
//   fill(0);
//   scale(zoom);
// model(octahedron);

// }
//  
// function mouseWheel(event) {
//   zoom += sensativity * event.delta;
//   zoom = constrain(zoom, zMin, zMax);
//   //uncomment to block page scrolling
//   return false;
// }

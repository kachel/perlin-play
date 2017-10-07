var xoff1 = 0;
var xoff2 = 10000;


function setup() {
  createCanvas(400, 400)
}

function draw() {
  background(15);

  var x = map(noise(xoff1), 0, 1, 0, width);
  var y = map(noise(xoff2), 0, 1, 0, height);

  xoff1 += 0.03;
  xoff2 += 0.03;
  ellipse(x, y, 24, 24);
  fill(24,167,32, 255);
  noStroke(24,167,32, 255);

}

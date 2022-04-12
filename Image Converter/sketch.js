// Image to ASCII

const density = 'Ñ@#W$9876543210?!abc;:+=-,._ ';
let joeBiden;

function preload() {
    joeBiden = loadImage("Joe-Biden-PNG.png");
    
}

function setup() {
  createCanvas(600, 600); 
}

function draw() {
  background(0);
  
  let w = width / joeBiden.width;
  let h = height / joeBiden.height;
  joeBiden.loadPixels();
  for (let i = 0; i < joeBiden.width; i++) {
    for (let j = 0; j < joeBiden.height; j++) {
      const pixelIndex = (i + j * joeBiden.width) * 4;
      const r = joeBiden.pixels[pixelIndex + 0];
      const g = joeBiden.pixels[pixelIndex + 1];
      const b = joeBiden.pixels[pixelIndex + 2];
      const avg = (r + g + b) / 3;
      
      noStroke();
      fill(255);
      
      const len = density.length;
      const charIndex = floor(map(avg,0,255,len,0));
      
      textSize(w);
      textAlign(CENTER, CENTER);
      text(density.charAt(charIndex), i * w + w * 0.5, j * h + h * 0.5);

    }
  }
}
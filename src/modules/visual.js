// modules/visual.js

export function drawFibonacciCircles(sequence, p) {
    p.translate(p.width / 2, p.height / 2);
  
    for (let i = 0; i < sequence.length; i++) {
      let radius = sequence[i] * 10;
      p.stroke(255, 150, 0);
      p.noFill();
      p.ellipse(0, 0, radius * 2);
    }
  }
  
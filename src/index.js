import p5 from 'p5';
import { generateFibonacci } from './modules/fibonacci'

let sequence;
let currentCircle = 0; // Index to track the current circle to draw
let nextDrawTime = 0; // Time to draw the next circle

new p5((sketch) => {
    sketch.setup = () => {
        sketch.createCanvas(800, 800);
        sketch.background(220);

        sequence = generateFibonacci(10);
    };
    function startAnimation() {
        sketch.draw = () => {
            // sketch.background(220);

            if (sketch.millis() > nextDrawTime) {
                if (currentCircle < sequence.length) {
                    let x = sketch.width / 2;
                    let y = sketch.height / 2;

                    for (let i = 0; i <= currentCircle; i++) {
                        let diameter = sequence[i] * 20;
                        sketch.ellipse(x, y, diameter, diameter);

                        // Adjust the position for the next circle.
                        x += sequence[i] * 10;
                    }

                    currentCircle++;
                    nextDrawTime = sketch.millis() + 100; // Schedule the next circle draw 1 second later.
                } else {
                    sketch.noLoop(); // Stops draw loop if all circles have been drawn.
                }
            }

        };
    }
    // event listeners
    document.getElementById('startButton').addEventListener('click', startAnimation);
});


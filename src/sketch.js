// import p5 from 'p5';

export default function sketch(p) {

    p.setup = function() {
        p.createCanvas(400, 400);
        p.background(220);
    };

    p.draw = function() {
        // ...
    };

    p.mousePressed = function() {
        p.fill(p.random(255), p.random(255), p.random(255));
        p.ellipse(p.mouseX, p.mouseY, 50, 50);
    };
}

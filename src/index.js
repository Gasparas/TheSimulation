import p5 from 'p5';
import Matter from 'matter-js';
import * as Tone from 'tone';

// Your application logic here using p5.js, matter.js, and tone.js
// Aliases for Matter.js modules
let Engine = Matter.Engine,
Render = Matter.Render,
World = Matter.World,
Bodies = Matter.Bodies,
Events = Matter.Events;

let engine = Engine.create();
let render = Render.create({
element: document.body,
engine: engine,
options: {
    width: window.innerWidth,
    height: window.innerHeight,
    wireframes: false
}
});

let colorPalette = ['#E63946', '#F1FAEE', '#A8DADC', '#457B9D', '#1D3557'];
let sensorY = render.options.height / 2;
let groundY = render.options.height - 10;

// Create ground
let ground = Bodies.rectangle(render.options.width / 2, groundY, render.options.width, 20, {
isStatic: true,
render: {
    fillStyle: '#2c3e50'
}
});

World.add(engine.world, ground);

// Spawn balls at intervals
setInterval(() => {
let ball = Bodies.circle(Math.random() * render.options.width, 0, random(10, 30), {
    restitution: 0.8,
    render: {
        fillStyle: random(colorPalette)
    }
});
World.add(engine.world, ball);
}, 50);

// Listen for collision events
Events.on(engine, 'collisionStart', (event) => {
let pairs = event.pairs;
for (let i = 0; i < pairs.length; i++) {
    let pair = pairs[i];
    if (pair.bodyA === ground || pair.bodyB === ground) {
        let ball = pair.bodyA === ground ? pair.bodyB : pair.bodyA;
        if (ball.position.y - ball.circleRadius < sensorY && ball.position.y + ball.circleRadius > sensorY) {
            ball.render.fillStyle = random(colorPalette);
        }
    }
}
});

Engine.run(engine);
Render.run(render);

function random(min, max) {
if (Array.isArray(min)) return min[Math.floor(Math.random() * min.length)];
return Math.random() * (max - min) + min;
}
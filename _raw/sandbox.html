<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Drum Beat with Matter.js and Tone.js</title>
    <script src="https://cdn.jsdelivr.net/npm/tone@14.8.30/build/Tone.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.17.1/matter.min.js"></script>
</head>

<body>

    <canvas id="drumCanvas" width="800" height="400"></canvas>
    <button id="startButton">Start</button>

    <script>
        // *** MATTER.JS SETUP ***

        // Aliases for Matter.js functions we're using.
        const Engine = Matter.Engine,
            Render = Matter.Render,
            World = Matter.World,
            Bodies = Matter.Bodies,
            Body = Matter.Body;

        const engine = Engine.create();

        engine.world.gravity.x = 0.5; // No horizontal gravity

        const render = Render.create({
            canvas: document.getElementById('drumCanvas'),
            engine: engine,
            options: {
                width: 800,
                height: 400,
                wireframes: false
            }
        });

        // Create rectangles for kick, snare, and hi-hat drums.
        const kickRect = Bodies.rectangle(150, 300, 100, 50, { render: { fillStyle: 'red' } });
        const snareRect = Bodies.rectangle(400, 300, 100, 50, { render: { fillStyle: 'blue' } });
        const hihatRect = Bodies.rectangle(650, 300, 100, 50, { render: { fillStyle: 'green' } });

        // Add rectangles to the simulation world.
        World.add(engine.world, [kickRect, snareRect, hihatRect]);
        Render.run(render);

        // Function to apply an upward force to the rectangles to simulate a bounce.
        function bounceRect(rectangle) {
            const originalColor = rectangle.render.fillStyle; // Store the original color
            rectangle.render.fillStyle = '#FFFFFF'; // Set the color to red, for example

            setTimeout(function () {
                rectangle.render.fillStyle = originalColor; // Restore the original color after 0.1s (100ms)
            }, 100);
        }

        // *** TONE.JS SETUP ***

        // Sequences for each drum.
        // When a sequence "plays" a 1, it will bounce the corresponding rectangle.
        const kickSequence = new Tone.Sequence(function (time, note) {
            if (note) {
                bounceRect(kickRect);
            }
        }, [1, 0, 1, 0], "4n");

        const snareSequence = new Tone.Sequence(function (time, note) {
            if (note) {
                bounceRect(snareRect);
            }
        }, [0, 1, 0, 1], "4n");

        const hihatSequence = new Tone.Sequence(function (time, note) {
            if (note) {
                bounceRect(hihatRect);
            }
        }, [1, 1, 1, 1], "4n");

        // Add event listener for the start button.
        // This ensures that the AudioContext starts after a user gesture.
        document.getElementById('startButton').addEventListener('click', async function () {
            // Start Tone.js
            await Tone.start();

            // If AudioContext isn't running, resume it.
            if (Tone.context.state !== 'running') {
                Tone.context.resume();
            }

            // Start the drum sequences.
            kickSequence.start(0);
            snareSequence.start(0);
            hihatSequence.start(0);
            Tone.Transport.start();
            console.log('tone');
        });

    </script>
</body>

</html>
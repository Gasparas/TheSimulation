import * as Tone from 'tone';

export function playRhythm(sequence, p) {
    const synth = new Tone.Synth().toDestination();

    let elapsedTime = 0;  // Initialize elapsed time

    sequence.forEach((number, index) => {
        elapsedTime += number * 500;  // Increase the elapsed time based on the Fibonacci number
        
        Tone.Transport.schedule(() => {
            synth.triggerAttackRelease('C4', '8n'); 
        }, elapsedTime / 1000);  // Convert milliseconds to seconds for Tone.js
    });

    // Tone.Transport.start();  // Start the Tone.js transport to play scheduled events
}

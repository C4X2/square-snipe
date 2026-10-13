import hit from "./assets/audio/hit.wav.mp4";
import miss from "./assets/audio/miss.wav.mp4";
import score from "./assets/audio/pickupCoin.wav.mp4";
import powerUp from "./assets/audio/powerUp.wav.mp4";

export function buildAudioBank(): AudioBank {
    return new CachedAudioBank();
}

function fromAudio(str: string): AudioBufferSourceNode {
    const context = new AudioContext();
    // Make a place to store the audio
    const sourceBuffer = context.createBufferSource();
    // Prepare to access a URL
    const request = new XMLHttpRequest();
    // open file (asynchronously)
    request.open("GET", str, true);
    // expect that it will be binary data, not text
    request.responseType = "arraybuffer";
    // when it loads, we'll put it in an AudioBuffer
    // first create the onload function
    request.onload = function () {
        // put the undecoded audio data in a buffer
        const undecodedAudio = request.response;
        // decode it, then put it in the global sourceBuffer
        context.decodeAudioData(undecodedAudio, function (buffer) {
            sourceBuffer.buffer = buffer;
        });
    };

    request.send();
    return sourceBuffer;
}

class CachedAudioBank implements AudioBank {

    audioMap: Map<AudioClip, AudioBufferSourceNode> = new Map<AudioClip, AudioBufferSourceNode>;
    
    defaultAudioOptions = {
        length: 0,
        sampleRate: 0
    };

    context = new AudioContext();

    constructor() {
        this.audioMap.set(AudioClip.HIT, fromAudio(hit));
        this.audioMap.set(AudioClip.MISS, fromAudio(miss));
        this.audioMap.set(AudioClip.SCOREUP, fromAudio(score));
        this.audioMap.set(AudioClip.POWERUP, fromAudio(powerUp));
    }

    playSound(arg0: AudioClip) {
        const theSound = this.context.createBufferSource();
        // point it to the captured, decoded sound
        theSound.buffer = this.audioMap.get(arg0)?.buffer || new AudioBuffer(this.defaultAudioOptions);
        // connect it to the output
        theSound.connect(this.context.destination);
        // play it
        theSound.start();
    }
}

export interface AudioBank {
    playSound: (arg0: AudioClip) => void
}

export enum AudioClip {
    HIT,
    SCOREUP,
    POWERUP,
    MISS
}
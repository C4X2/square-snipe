import hit from "./assets/audio/hit.wav.mp4";
import miss from "./assets/audio/miss.wav.mp4";
import score from "./assets/audio/pickupCoin.wav.mp4";
import powerUp from "./assets/audio/powerUp.wav.mp4";
import { Howl } from 'howler';

export function buildAudioBank(): AudioBank {
    return new CachedAudioBank();
}

function createHowl(str: string): Howl {
    return new Howl({
        src: [str]
    });
}

class CachedAudioBank implements AudioBank {

    audioMap: Map<AudioClip, Howl> = new Map<AudioClip, Howl>;

    defaultAudioOptions = {
        length: 0,
        sampleRate: 0
    };

    constructor() {
        this.audioMap.set(AudioClip.HIT, createHowl(hit));
        this.audioMap.set(AudioClip.MISS, createHowl(miss));
        this.audioMap.set(AudioClip.SCOREUP, createHowl(score));
        this.audioMap.set(AudioClip.POWERUP, createHowl(powerUp));
    }

    playSound(arg0: AudioClip) {
        this.audioMap.get(arg0)?.play();
    }
}

export interface AudioBank {
    playSound: (arg0: AudioClip) => void

    /**
     * TODO
     * playBackgroundMusic
     */
}

export enum AudioClip {
    HIT,
    SCOREUP,
    POWERUP,
    MISS
}
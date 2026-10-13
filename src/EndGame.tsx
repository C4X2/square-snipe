import BackButton from "./BackButton";
import { booleanValue, playAudio } from './Utils.tsx'
import lose from "./assets/audio/game_over.mp3";

export function EndGame(params: VictoryParams) {
    const didWin: boolean = booleanValue(params.win);
    const text: string = didWin ? "You win " : "You Lose ";
    return (
        <div>
            {text}
            Score: {params.score}
            {!didWin && <div onLoadedData={() => playAudio(lose)}></div>}
            <BackButton href="/"/>
        </div>
    )
}

export interface VictoryParams {
    score: number,
    win?: boolean
}

export default EndGame;
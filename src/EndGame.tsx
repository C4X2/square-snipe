import { useEffect } from "react";
import BackButton from "./BackButton";
import { booleanValue, playAudio } from './Utils.tsx';
import lose from "./assets/audio/game_over.mp3";

export function EndGame(params: VictoryParams) {
    const didWin: boolean = booleanValue(params.win);
    const title: string = didWin ? "Victory!" : "Game Over";

    useEffect(() => {
        if (!didWin) {
            playAudio(lose);
        }
    }, [didWin]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 text-stone-50 text-center">
            <div className="bg-slate-800/90 p-8 rounded-2xl shadow-2xl border border-slate-700 max-w-sm w-full space-y-4">
                <h1 className={`text-4xl font-extrabold ${didWin ? "text-emerald-400" : "text-rose-500"}`}>
                    {title}
                </h1>
                <p className="text-xl text-stone-300">
                    Final Score: <span className="font-bold text-amber-400">{params.score}</span>
                </p>
                <div className="pt-4 flex justify-center">
                    <BackButton href="/" />
                </div>
            </div>
        </div>
    );
}

export interface VictoryParams {
    score: number;
    win?: boolean;
}

export default EndGame;
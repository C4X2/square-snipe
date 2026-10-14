export interface ScoreParams {
    score: number;
}

export function Score({ score }: ScoreParams) {
    return (
        <div className="flex items-center gap-2 bg-slate-800/80 px-4 py-2 rounded-xl border border-slate-700 shadow-md">
            <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Score:</span>
            <span className="text-2xl font-mono font-bold text-amber-400 tabular-nums">
                {score}
            </span>
        </div>
    );
}

export default Score;

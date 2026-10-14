export interface LevelDisplayParams {
    level: number;
}

export function LevelDisplay({ level }: LevelDisplayParams) {
    return (
        <div className="flex items-center gap-2 bg-slate-800/80 px-4 py-2 rounded-xl border border-slate-700 shadow-md">
            <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Level:</span>
            <span className="text-2xl font-mono font-bold text-sky-400 tabular-nums">
                {level + 1}
            </span>
        </div>
    );
}

export default LevelDisplay;
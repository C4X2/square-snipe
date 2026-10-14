export interface CountDownClockParams {
    timeLeft: number;
}

export function CountdownClock({ timeLeft }: CountDownClockParams) {
    const isLow = timeLeft <= 5;
    const isMedium = timeLeft <= 10 && timeLeft > 5;

    const colorClass = isLow
        ? "text-rose-500 animate-pulse font-extrabold"
        : isMedium
        ? "text-amber-400 font-bold"
        : "text-emerald-400 font-bold";

    return (
        <div className="flex items-center gap-2 bg-slate-800/80 px-4 py-2 rounded-xl border border-slate-700 shadow-md">
            <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Time:</span>
            <span className={`text-2xl font-mono tabular-nums ${colorClass}`}>
                {timeLeft}s
            </span>
        </div>
    );
}

export default CountdownClock;

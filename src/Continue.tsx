export interface ContinueParams {
    levelFin: boolean;
    clickFunction: () => void;
    clockBoost?: number;
}

export function Continue({ levelFin, clickFunction, clockBoost }: ContinueParams) {
    if (!levelFin) {
        return null;
    }

    return (
        <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in p-4">
            <div className="bg-slate-900 border border-slate-700 p-8 rounded-2xl shadow-2xl text-center max-w-sm w-full space-y-4">
                <div className="text-4xl">🎉</div>
                <h2 className="text-3xl font-extrabold text-emerald-400">Level Cleared!</h2>
                {clockBoost && (
                    <p className="text-amber-400 text-sm font-semibold">
                        +{clockBoost}s Time Boost Added!
                    </p>
                )}
                <button
                    onClick={clickFunction}
                    className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-lg rounded-xl transition-all shadow-lg hover:shadow-emerald-500/25 cursor-pointer"
                >
                    Next Level
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default Continue;

import { BackButton } from './BackButton';

export function Instructions() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-between p-6 text-stone-50">
            {/* Header with centered Back Button */}
            <div className="w-full max-w-lg flex items-center justify-between">
                <BackButton href="/" />
                <h1 className="text-2xl font-bold tracking-tight">Instructions</h1>
                <div className="w-12" /> {/* Balancing spacer */}
            </div>

            {/* Instruction content card */}
            <div className="w-full max-w-lg bg-slate-800/80 p-6 md:p-8 rounded-2xl border border-slate-700 shadow-xl space-y-6 my-auto">
                <div className="space-y-4 text-stone-200 leading-relaxed text-sm md:text-base">
                    <div className="flex items-start gap-3">
                        <p>
                            <strong className="text-white">Watch the Target:</strong> Look at the single <em className="text-amber-400">Target Color</em> square shown at the top of the board.
                        </p>
                    </div>

                    <div className="flex items-start gap-3">
                        <p>
                            <strong className="text-white">Snipe the Square:</strong> Click the matching colored square in the grid below. Accurate clicks eliminate the square and give +10 points.
                        </p>
                    </div>

                    <div className="flex items-start gap-3">
                        <p>
                            <strong className="text-white">Avoid Misses:</strong> Clicking the wrong square shakes the tile and wastes precious seconds.
                        </p>
                    </div>

                    <div className="flex items-start gap-3">
                        <p>
                            <strong className="text-white">Beat the Clock:</strong> Clear all squares before the countdown expires. Finishing early adds bonus points and extra seconds for the next level!
                        </p>
                    </div>

                    <div className="flex items-start gap-3">
                        <p>
                            <strong className="text-white">Dynamic Progression:</strong> Each level expands the grid with more colors, testing your speed and color perception.
                        </p>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="text-xs text-slate-500 py-2">
                Good luck, sniper!
            </div>
        </div>
    );
}

export default Instructions;

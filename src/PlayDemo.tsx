import { useState, useEffect, useMemo } from 'react';
import { BackButton } from './BackButton';
import { CountdownClock } from './CountdownClock';
import { Continue } from './Continue';
import { SquareRow } from './SquareRow';
import { Score } from './Score';
import { EndGame } from './EndGame';
import { LevelDisplay } from './LevelDisplay';
import { TargetSquare } from './TargetSquare';
import { AudioClip, buildAudioBank } from './AudioCache.tsx';
import { generateLevel, INITIAL_CLOCK_SECONDS, Level } from './LevelGenerator';
import { shuffleColors } from './Utils.tsx';

export const MAX_CAMPAIGN_LEVELS = 10;

export function PlayDemo() {
    const audioManager = useMemo(() => buildAudioBank(), []);

    const [currentLevelIndex, setCurrentLevelIndex] = useState(0);
    const [level, setLevel] = useState<Level>(() => generateLevel(1));
    const [clearedMap, setClearedMap] = useState<Record<string, boolean>>({});
    const [shakingMap, setShakingMap] = useState<Record<string, boolean>>({});

    const [found, setFound] = useState(0);
    const [score, setScore] = useState(0);
    const [fin, setFin] = useState(false);
    const [endGame, setEndGame] = useState(false);
    const [win, setWin] = useState(true);
    const [clock, setClock] = useState(INITIAL_CLOCK_SECONDS);

    // Sequence of target colors to snipe in randomized order
    const [colorSequence, setColorSequence] = useState<string[]>(() =>
        shuffleColors(level.squares.flat(1))
    );
    const totalGoals = colorSequence.length;

    // Advance to next procedural level
    const incrementLevel = (): void => {
        const nextLevelIndex = currentLevelIndex + 1;

        if (nextLevelIndex >= MAX_CAMPAIGN_LEVELS) {
            // Victory after completing campaign
            setEndGame(true);
            setWin(true);
            return;
        }

        const nextLevel = generateLevel(nextLevelIndex + 1);
        setCurrentLevelIndex(nextLevelIndex);
        setLevel(nextLevel);
        setClearedMap({});
        setShakingMap({});
        setFound(0);
        setFin(false);
        setColorSequence(shuffleColors(nextLevel.squares.flat(1)));
        setClock(prev => prev + nextLevel.clockBoost);

        audioManager.playSound(AudioClip.POWERUP);
    };

    // Declarative tile click handler
    const handleTileClick = (row: number, col: number, color: string) => {
        const tileKey = `${row}_${col}`;

        // Ignore clicks if tile already cleared, shaking, or level finished
        if (clearedMap[tileKey] || shakingMap[tileKey] || fin || endGame) {
            return;
        }

        const expectedColor = colorSequence[found];

        if (expectedColor === color) {
            // MATCH HIT
            audioManager.playSound(AudioClip.HIT);
            setClearedMap(prev => ({ ...prev, [tileKey]: true }));

            const newFound = found + 1;
            setFound(newFound);
            setScore(prev => prev + 10);

            if (newFound >= totalGoals) {
                // Completed level
                setFin(true);
                setScore(prev => prev + clock * 5);
                audioManager.playSound(AudioClip.SCOREUP);
            }
        } else {
            // MISS
            audioManager.playSound(AudioClip.MISS);
            setShakingMap(prev => ({ ...prev, [tileKey]: true }));
            setTimeout(() => {
                setShakingMap(prev => ({ ...prev, [tileKey]: false }));
            }, 450);
        }
    };

    // Smooth countdown timer
    useEffect(() => {
        if (fin || endGame) return;

        const timer = setInterval(() => {
            setClock(prev => {
                if (prev <= 1) {
                    setFin(true);
                    setEndGame(true);
                    setWin(false);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [fin, endGame]);

    if (endGame) {
        return <EndGame score={score} win={win} />;
    }

    return (
        <div className="min-h-screen flex flex-col justify-between items-center p-4 md:p-8 text-stone-50 select-none">
            {/* Top Navigation & Status Bar */}
            <header className="w-full max-w-2xl flex flex-wrap items-center justify-between gap-4">
                <BackButton href="/" />
                <div className="flex items-center gap-3">
                    <LevelDisplay level={currentLevelIndex} />
                    <Score score={score} />
                    <CountdownClock timeLeft={clock} />
                </div>
            </header>

            {/* Target Display and Game Board */}
            <main className="flex flex-col items-center justify-center my-auto w-full max-w-xl">
                <TargetSquare
                    color={colorSequence[found] || ""}
                />

                <div className="bg-slate-900/60 p-4 md:p-6 rounded-2xl border border-slate-700/60 shadow-2xl backdrop-blur-sm mt-2">
                    {level.squares.map((rowColors, rIndex) => (
                        <SquareRow
                            key={`row_${rIndex}_${level.level}`}
                            colors={rowColors}
                            rowNum={rIndex}
                            onTileClick={handleTileClick}
                            clearedMap={clearedMap}
                            shakingMap={shakingMap}
                        />
                    ))}
                </div>

                <div className="text-xs text-slate-400 mt-3 font-medium">
                    Squares remaining: {Math.max(0, totalGoals - found)} / {totalGoals}
                </div>
            </main>

            {/* Level Complete Modal */}
            <Continue
                levelFin={fin}
                clickFunction={incrementLevel}
                clockBoost={level.clockBoost}
            />

            {/* Bottom Spacing */}
            <footer className="text-xs text-slate-500 py-2">
                Match the target color by clicking its square in the grid
            </footer>
        </div>
    );
}

export default PlayDemo;

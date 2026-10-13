import { BackButton } from './BackButton';
import { CountdownClock } from './CountdownClock';
import { Continue } from './Continue';
import { SquareRow } from './SquareRow';
import { Score } from './Score';
import { EndGame } from './EndGame';
import { LevelDisplay } from './LevelDisplay';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { levels, maxClock } from './assets/db/levels.json';
import { shuffleColors } from "./Utils.tsx";
import { defaultShake } from './UIFunctions.tsx'
import { TargetSquare } from './TargetSquare';
import { AudioClip, buildAudioBank } from './AudioCache.tsx';

//function countSquaresOfType(level: Level): number {
//    const squares: string[][] = level.squares;
//    const goalColor: string = level.goalColor;
//    if (squares === null || squares === undefined || isEmptyString(goalColor)) {
//        console.error("No squares found.");
//        return 0;
//    }

//    return countOccurances(squares, goalColor);
//}

export interface Level {
    level: number;
    squares: string[][];
    clockBoost?: number;
}

/*
 * Step 1: Get Data from backend (goals and colors)
 *         Dynamically generate the stage data so it changes everytime? Or at ;east rotate the image randomly
 *         Prolly      
 * Step 3: get List of desired colors
 * Step 4: Once there are no more in the list they can continue to the next level
 *         On continue, need to reload page with new level information, so hitting "Play" -> Level 1 information but continue will load level x +1 info
 * Step 5: If the wrong color is clicked then show a shake animation and make them wait
 * Step 6: Improve the countdown clock to be more visually appealing

 * Step 9: Display level to the user
 *
 * 
 */
export function PlayDemo() {

    const [currentLevel, setCurrentLevel] = useState(0);
    const [level, setLevel] = useState(levels[currentLevel]);
    const [colors, setColors] = useState(level.squares);
    const nav = useNavigate();
    const [found, setFound] = useState(0);
    const [score, setScore] = useState(0);
    const [fin, setFin] = useState(false);
    const [endGame, setEndGame] = useState(false);
    const [colorArr, setColorArr] = useState(shuffleColors(colors.flat(1)));
    const goals = colorArr.length;
    const [clock, setClock] = useState(maxClock);
    const [win, setWin] = useState(true);
    const [idPrefix, setIdPrefix] = useState(window.crypto.randomUUID());
    const audioManager = buildAudioBank();

    const incrementLevel = (): void => {
        setCurrentLevel(currentLevel + 1);

        if (currentLevel + 1 >= levels.length) {
            // no more levels in the queue end the game
            setEndGame(true);
            return;
        }

        const llv: Level = levels[currentLevel + 1];
        setLevel(llv);
        setFound(0);
        setColors(llv.squares);
        setFin(false);
        setColorArr(shuffleColors(llv.squares.flat(1)));
        setIdPrefix(window.crypto.randomUUID());
        audioManager.playSound(AudioClip.SCOREUP);

        if (llv.clockBoost) {
            setClock(clock + llv.clockBoost);
        }
    }

    const targetColor = (color: string): boolean => {
        if (colorArr[found] === color) {
            audioManager.playSound(AudioClip.HIT);
        }
        else {
            audioManager.playSound(AudioClip.MISS);
        }
        return colorArr[found] === color;
    }

    const incrementFound = () => {
        if (found + 1 >= goals) {
            setFin(true);
            setScore(score + clock);
        }
        setFound(found + 1);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            const cr = (clock - 1);

            if (cr <= 0 && !fin) {
                // The clock has timed out, end the game
                setFin(true);
                setEndGame(true);
                setWin(false);
            }

            if (!fin) {
                setClock(cr);
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [clock, score, nav, fin]);

    const squareRows =
        <div>
            {colors.map(function (obj, i) {
                return <SquareRow colors={obj} rowNum={i} targetColor={targetColor} incrementScore={incrementFound} key={idPrefix + i} />
            })}
        </div>;

    if (!endGame) {
        return (
            <>
                <div className="text-stone-50">
                    <BackButton href="/" />
                    <LevelDisplay level={currentLevel} />
                    {squareRows}
                    <TargetSquare color={colorArr[found]} clickFunction={defaultShake} />
                    <Score score={score} />
                    <CountdownClock timeLeft={clock} />
                    <Continue levelFin={fin} clickFunction={incrementLevel} />
                </div>
            </>
        );
    }

    return (
        <>
            <EndGame score={score} win={win} />
        </>
    )
}

export default PlayDemo;

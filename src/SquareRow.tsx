import { Square } from './Square';
import './SquareRow.css';
import { defaultShake } from './UIFunctions.tsx';
import { booleanValue, defaultString } from './Utils.tsx';

export interface SquareRowParams {
    colors: Array<string>;
    rowNum: number;
    onTileClick?: (rowNum: number, colNum: number, color: string) => void;
    clearedMap?: Record<string, boolean>;
    shakingMap?: Record<string, boolean>;
    // Backward compatibility props
    targetColor?: (arg0: string) => boolean;
    incrementScore?: () => void;
}

export function SquareRow({
    colors,
    rowNum,
    onTileClick,
    clearedMap,
    shakingMap,
    targetColor,
    incrementScore
}: SquareRowParams) {
    // Fallback click handler if declarative onTileClick is not provided
    const legacyClick = (id: string, colIndex: number, color: string) => {
        if (onTileClick) {
            onTileClick(rowNum, colIndex, color);
            return;
        }

        const item = document.getElementById(id);
        const tileColor = defaultString(item?.dataset?.color);
        const shaking = booleanValue(item?.dataset?.shaking);
        if (targetColor && targetColor(tileColor) && !shaking) {
            item?.classList.add('invisible');
            incrementScore?.();
        } else {
            defaultShake(id);
        }
    };

    return (
        <div className="square-row">
            {colors.map((color, colIndex) => {
                const tileKey = `${rowNum}_${colIndex}`;
                const isCleared = clearedMap ? Boolean(clearedMap[tileKey]) : false;
                const isShaking = shakingMap ? Boolean(shakingMap[tileKey]) : false;

                return (
                    <Square
                        color={color}
                        key={tileKey}
                        rowNum={rowNum}
                        colNum={colIndex}
                        isCleared={isCleared}
                        isShaking={isShaking}
                        sqClick={(id) => onTileClick ? onTileClick(rowNum, colIndex, color) : legacyClick(id, colIndex, color)}
                    />
                );
            })}
        </div>
    );
}

export default SquareRow;

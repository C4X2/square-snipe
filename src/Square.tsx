import './Square.css';

export interface SquareParams {
    color: string;
    sqClick?: (id: string) => void;
    rowNum?: number;
    colNum?: number;
    isCleared?: boolean;
    isShaking?: boolean;
    isTarget?: boolean;
    className?: string;
}

export function Square({
    color,
    sqClick,
    rowNum,
    colNum,
    isCleared = false,
    isShaking = false,
    isTarget = false,
    className = ""
}: SquareParams) {
    const id = rowNum !== undefined && colNum !== undefined
        ? `sq_${rowNum}_${colNum}`
        : `sq_${color}_${rowNum ?? 0}_${colNum ?? 0}`;

    const classes = [
        isTarget ? "square-target" : "square",
        isCleared ? "square-cleared" : "",
        isShaking ? "square-shaking" : "",
        className
    ].filter(Boolean).join(" ");

    return (
        <div
            id={id}
            className={classes}
            onClick={() => sqClick?.(id)}
            style={{ backgroundColor: color }}
            data-color={color}
            data-shaking={isShaking ? "true" : "false"}
            role={isTarget ? "img" : "button"}
            aria-label={`${color} square`}
        />
    );
}

export default Square;

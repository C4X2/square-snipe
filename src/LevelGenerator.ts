export interface Level {
    level: number;
    rows: number;
    cols: number;
    squares: string[][];
    clockBoost: number;
}

// Vibrant, distinct colors that look fantastic against dark backgrounds
export const COLOR_PALETTE: string[] = [
    "#EF4444", // Red
    "#F97316", // Orange
    "#F59E0B", // Amber
    "#EAB308", // Yellow
    "#84CC16", // Lime
    "#10B981", // Emerald
    "#14B8A6", // Teal
    "#06B6D4", // Cyan
    "#3B82F6", // Blue
    "#6366F1", // Indigo
    "#8B5CF6", // Violet
    "#A855F7", // Purple
    "#D946EF", // Fuchsia
    "#EC4899", // Pink
    "#F43F5E", // Rose
    "#F8FAFC"  // Ghost White
];

export const INITIAL_CLOCK_SECONDS = 25;

/**
 * Calculates grid dimensions (rows x cols) based on current level number (1-indexed).
 */
export function getGridDimensions(levelNum: number): { rows: number; cols: number } {
    if (levelNum <= 1) return { rows: 2, cols: 2 }; // 4 tiles
    if (levelNum === 2) return { rows: 2, cols: 3 }; // 6 tiles
    if (levelNum === 3) return { rows: 3, cols: 3 }; // 9 tiles
    if (levelNum === 4) return { rows: 3, cols: 4 }; // 12 tiles
    if (levelNum === 5) return { rows: 4, cols: 4 }; // 16 tiles
    if (levelNum === 6) return { rows: 4, cols: 5 }; // 20 tiles
    
    // Level 7+: max 5 rows, max 5 or 6 cols
    const rows = Math.min(5, 3 + Math.floor((levelNum - 3) / 2));
    const cols = Math.min(5, 3 + Math.ceil((levelNum - 3) / 2));
    return { rows, cols };
}

/**
 * Calculates clock boost awarded when finishing a level.
 */
export function getClockBoost(rows: number, cols: number, levelNum: number): number {
    const totalTiles = rows * cols;
    // Scaled boost based on number of tiles and difficulty
    return Math.max(5, Math.min(18, Math.round(totalTiles * 0.7) + Math.min(3, Math.floor(levelNum / 3))));
}

/**
 * Procedurally generates a Level configuration for any level number (1-indexed).
 */
export function generateLevel(levelNum: number): Level {
    const { rows, cols } = getGridDimensions(levelNum);
    const totalTiles = rows * cols;

    // Number of distinct colors increases with level
    const distinctColorsCount = Math.min(
        COLOR_PALETTE.length,
        Math.min(totalTiles, 2 + Math.floor(levelNum * 0.75))
    );

    // Shuffle palette to pick a unique subset of colors for this level
    const shuffledPalette = [...COLOR_PALETTE].sort(() => Math.random() - 0.5);
    const selectedColors = shuffledPalette.slice(0, distinctColorsCount);

    // Build the tile list ensuring all selected colors appear at least once
    const tileColors: string[] = [...selectedColors];
    while (tileColors.length < totalTiles) {
        const randomColor = selectedColors[Math.floor(Math.random() * selectedColors.length)];
        tileColors.push(randomColor);
    }

    // Shuffle the tiles so identical colors aren't clustered
    for (let i = tileColors.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tileColors[i], tileColors[j]] = [tileColors[j], tileColors[i]];
    }

    // Distribute into 2D grid [rows][cols]
    const squares: string[][] = [];
    for (let r = 0; r < rows; r++) {
        const rowSquares: string[] = [];
        for (let c = 0; c < cols; c++) {
            rowSquares.push(tileColors[r * cols + c]);
        }
        squares.push(rowSquares);
    }

    const clockBoost = getClockBoost(rows, cols, levelNum);

    return {
        level: levelNum,
        rows,
        cols,
        squares,
        clockBoost
    };
}

import { Square } from './Square';
import { isNonEmptyString } from './Utils';

export interface TargetSquareParams {
    clickFunction?: (id: string) => void;
    color: string;
}

export function TargetSquare({ color, clickFunction }: TargetSquareParams) {
    const colorPresent = isNonEmptyString(color);

    if (!colorPresent) {
        return null;
    }

    return (
        <div className="flex flex-col items-center justify-center my-3">
            <span className="text-sm font-semibold uppercase tracking-wider text-stone-300 mb-1">
                Target Color
            </span>
            <Square
                color={color}
                sqClick={clickFunction}
                isTarget={true}
            />
        </div>
    );
}

export default TargetSquare;
import { Square } from './Square';
import { isNonEmptyString } from './Utils';

export function TargetSquare(params: TargetSquareParams) {
    const randStr: number = Math.floor(Math.random() * 101); + 50;
    const colorPresent = isNonEmptyString(params.color);

    if (colorPresent) {
        return (
            <>
                <div>
                    <div><span>Current Target Color:</span></div>
                    <Square color={params.color} sqClick={params.clickFunction} rowNum={randStr} />
                </div>
            </>
        )
    }

    return (null);
}

export interface TargetSquareParams {
    clickFunction: (id: string) => void,
    color: string;
}

export default TargetSquare;
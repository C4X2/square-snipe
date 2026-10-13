import { Square } from './Square'
import './SquareRow.css'
import { defaultShake } from './UIFunctions.tsx';
import { booleanValue, defaultString } from './Utils.tsx'


export function SquareRow(params: SquareRowParams) {
    const clickFunction = (id: string) => {
        const item = document.getElementById(id);
        const tileColor = defaultString(item?.dataset?.color);
        const shaking = booleanValue(item?.dataset?.shaking);
        if (params.targetColor(tileColor) && !shaking) {
            item?.classList.add('invisible');
            params.incrementScore();
        } else {
            defaultShake(id);
        }
    }

    return (<div className="square-row">
        <>{params.colors.map(function (obj, i) {
            return (<Square color={obj} key={i} sqClick={clickFunction} rowNum={params.rowNum} />)
        })}</></div>
    );
}

export interface SquareRowParams {
    colors: Array<string>,
    rowNum: number,
    targetColor: (arg0: string) => boolean,
    incrementScore: () => void
}

export default SquareRow;

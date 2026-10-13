import './Square.css'

const id_prefix = "sq_id_";

export function Square(params: SquareParams) {
    const id = id_prefix + params.color + "_" + params.rowNum + "_";
    return (
        <>
            <div id={id} className="square" onClick={() => params.sqClick(id)} style={{ backgroundColor: params.color }} data-color={params.color} data-shaking={""}>

            </div>
        </>
    );

}

export interface SquareParams {
    color: string /* The color you want the square to be */,
    sqClick: (arg0: string) => void /* The function to be called on click*/,
    rowNum: number /* Which row this is in */
}

export default Square

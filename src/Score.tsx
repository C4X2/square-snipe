export function Score(params: ScoreParams) {
    return (
        <div className="text-2xl font-bold decoration-zinc-500">
            {params.score}
        </div>
    );
}

export interface ScoreParams {
    score: number
}

export default Score;

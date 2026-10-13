
export function Continue(params: ContinueParams) {
    let continueLink;

    if (params.levelFin) {
        continueLink = <button className="place-items-end" onClick={params.clickFunction}> Continue <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
        </svg>
        </button>;
    }

    return (continueLink);
}

export interface ContinueParams {
    levelFin: boolean
    clickFunction: () => void
}

export default Continue;

export function CountdownClock(params: CountDownClockParams) {

    return (
        <div>
            <span>{params.timeLeft}</span>
        </div>
    );
}

export interface CountDownClockParams {
    timeLeft: number /* The value to display */
}

export default CountdownClock;

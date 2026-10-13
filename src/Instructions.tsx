import { BackButton } from './BackButton'

export function Instructions() {
    return (
        <>
            <div className="text-stone-50">
                <div className="grid grid-cols-1">
                <BackButton href="/" cssClasses="mt-0 align-top" />
                    <p className="ml-[45vw] align-top">Instructions</p>
                </div>
            </div>
        </>
    );
}
export default Instructions;

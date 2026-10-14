import { BackButton } from './BackButton';
import './Support.css';

export function Support() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 text-stone-50" id="support-div">
            <div className="mb-6">
                <BackButton href="/" />
            </div>
            <div className="support_shadow text-center p-6 bg-slate-800/80 rounded-xl shadow-lg border border-slate-700 max-w-md">
                <p className="mb-3 text-lg">If you enjoyed the game, consider supporting the developer by</p>
                <a className="inline-block px-4 py-2 bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold rounded-lg transition-colors" href="https://ko-fi.com/c4x2give" target="_blank" rel="noreferrer">
                    buying me a coffee ☕
                </a>
            </div>
        </div>
    );
}

export default Support;

import { BackButton } from './BackButton';

export default function DownloadGame() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-between p-6 text-stone-50">
            <div className="w-full max-w-md flex items-center justify-between">
                <BackButton href="/" />
                <h1 className="text-2xl font-bold tracking-tight">Download Game</h1>
                <div className="w-12" />
            </div>

            <div className="w-full max-w-md bg-slate-800/80 p-8 rounded-2xl border border-slate-700 shadow-xl text-center space-y-6 my-auto">
                <h2 className="text-2xl font-bold text-white">Square Snipe for Windows</h2>
                <p className="text-sm text-stone-300">
                    Download the native Windows desktop app for the smoothest, lowest-latency gameplay.
                </p>

                <a
                    href={`${import.meta.env.BASE_URL}exe/square-snipe.exe`}
                    download="square-snipe.exe"
                    className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold rounded-xl shadow-lg hover:shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    Download .exe (Windows)
                </a>

                <p className="text-xs text-slate-400">
                    Standalone executable ~16 MB. No installation needed.
                </p>
            </div>

            <div className="text-xs text-slate-500 py-2">
                Square Snipe Desktop v0.1.0
            </div>
        </div>
    );
}

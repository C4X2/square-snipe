import { Link } from 'react-router-dom';
import './App.css';

export function App() {
    return (
        <div className="min-h-screen flex flex-col justify-between items-center p-6 text-stone-50 select-none">
            {/* Header / Logo */}
            <header className="pt-12 text-center">
                <h1 className="text-5xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 drop-shadow-md">
                    SQUARE SNIPE
                </h1>
                <p className="mt-2 text-stone-300 text-sm md:text-base tracking-wide">
                    Fast-paced color reflex matching
                </p>
            </header>

            {/* Menu Buttons */}
            <main className="flex flex-col gap-4 w-full max-w-xs">
                <Link
                    to="/play"
                    className="w-full py-4 px-8 text-center text-xl font-bold bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 rounded-2xl shadow-lg hover:shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                    ▶ Play Game
                </Link>

                <Link
                    to="/howto"
                    className="w-full py-3 px-8 text-center text-lg font-semibold bg-slate-800/80 hover:bg-slate-700/80 text-stone-200 border border-slate-700 rounded-2xl shadow-md transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                    How to Play
                </Link>

                <Link
                    to="/download"
                    className="w-full py-2.5 px-8 text-center text-sm font-semibold bg-slate-800/60 hover:bg-slate-700/70 text-sky-300 border border-slate-700/80 rounded-2xl shadow-sm transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                    Download App (.exe)
                </Link>

            </main>

            {/* Footer */}
            <footer className="pb-4 text-center text-xs text-stone-400">
                <span>Enjoying the game? Consider </span>
                <a
                    href="https://ko-fi.com/c4x2give"
                    target="_blank"
                    rel="noreferrer"
                    className="text-amber-400 hover:underline font-semibold"
                >
                    buying me a coffee
                </a>
            </footer>
        </div>
    );
}

export default App;

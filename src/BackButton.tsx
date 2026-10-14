import { useNavigate } from "react-router-dom";

export interface BackButtonParams {
    href: string;
    width?: string;
    cssClasses?: string;
}

export function BackButton({ href, cssClasses = "" }: BackButtonParams) {
    const nav = useNavigate();

    return (
        <button
            onClick={() => nav(href)}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 bg-slate-800/80 hover:bg-slate-700 text-stone-200 border border-slate-700 rounded-xl text-sm font-medium transition-all hover:-translate-x-0.5 active:translate-x-0 cursor-pointer ${cssClasses}`}
            aria-label="Go back"
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
            <span>Back</span>
        </button>
    );
}

export default BackButton;

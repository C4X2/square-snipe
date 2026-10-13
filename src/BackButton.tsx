import { useNavigate } from "react-router-dom";
import { isNonEmptyString } from "./Utils.tsx";

export function BackButton(params: BackButtonParams) {
    const tWidth = "w-45";
    const nav = useNavigate();
    const addntlCss = isNonEmptyString(params.cssClasses) ? params.cssClasses : "";
    const computedWidth = isNonEmptyString(params.width) ? params.width : tWidth;
    const classNames = "outline outline-offset-2 outline-1 text-white " + addntlCss + " " + computedWidth;
    const homeFunction = () => {
        nav(params.href);
    }

    return (<div className="flex items-center">
        <button className={classNames} onClick={homeFunction}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
            </svg>
            Back
        </button>
    </div>
    );
}

export interface BackButtonParams {
    href: string /* Relative location to go back to, should be present in the application router*/,
    width?: string /* Width for the back button, defaults to 1/3 of the parent element*/,
    cssClasses? : string
}

export default BackButton;

import { Link } from 'react-router-dom'
import './App.css'

export function App() {

    return (
        <>
            <div id="main-div" className="grid ml-[45vw]">
                <span className="grid-cols-1 mt-[45vh]">
                    <Link className="hover:animate-pulse" to="play">Play</Link>                   
                </span>
                <span className="grid-cols-1">
                    <Link className="hover:animate-pulse" to="/howto">Instructions</Link>
                </span>
            </div>
            <footer className="align-bottom ml-[36vw] footer">
                <div className="w-full">
                    <span className="text-sm text-stone-50 sm:text-center dark:text-white-400">If you enjoyed the game, consider supporting the developer by buying me a <a href="https://ko-fi.com/c4x2give" target="_blank">coffee.
                    </a>
                    </span>
                </div>
            </footer>
        </>
    );
}

export default App;

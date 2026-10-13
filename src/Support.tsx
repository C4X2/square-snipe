import { BackButton } from './BackButton';
import './Support.css';

export function Support() {
    return (
        <div className="w-h-100" style={{ width: '100vh' }} id="support-div">
            <BackButton href="/">Back</BackButton>
            <div className="support_shadow">
                <p>If you enjoyed the game, consider supporting the developer by</p><a href="https://ko-fi.com/c4x2give" target="_blank">buying me a coffee.
                </a></div>
        </div>
    );

}

export default Support;

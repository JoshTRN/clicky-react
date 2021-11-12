import { GameInfo } from '../types/types';

const Nav = (props: GameInfo) => (
    <nav className="navbar-light bg-light sticky-top">
        <ul className="d-flex flex-row justify-content-around navbar-nav mr-auto justify-content-around" style={{ width: '100%' }}>
            <li className="nav-item"><a className='nav-link'>Clicky Game</a></li>
            <li className="nav-item"><a className='nav-link text-center'>{props.message}</a></li>
            <li className="nav-item"><a className='nav-link'>Score: {props.currentScore} | Top Score: {props.highScore}</a></li>
        </ul>
    </nav>
)

export default Nav;
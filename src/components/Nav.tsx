import './Nav.css'
const Nav = (props: any) => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <ul className="navbar-nav mr-auto" style={{ width: '100%' }}>
            <li className="nav-item"><a className='nav-link'>Clicky Game</a></li>
            <li className="nav-item"><a className='nav-link text-center'>{props.message}</a></li>
            <li className="nav-item text-right"><a className='nav-link'>Score: {props.currentScore} | Top Score: {props.highScore}</a></li>
        </ul>
    </nav>
)

export default Nav;
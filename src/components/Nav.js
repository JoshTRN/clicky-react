import React from 'react';
import './Nav.css'

const Nav = props => (
    <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <ul class="navbar-nav mr-auto" style={{width: '100%'}}>
            <li class="nav-item"><a class='nav-link'>Clicky Game</a></li>
            <li class="nav-item"><a class='nav-link text-center'>{props.message}</a></li>
            <li class="nav-item text-right"><a class='nav-link'>Score: {props.currentScore} | Top Score: {props.highScore}</a></li>
        </ul>
    </nav>
)

export default Nav;
import React from 'react';
import {Link} from 'react-router-dom';
import './home.css';

const NavBar = (props) => {
    return(
        <div className={'navBar'}>
            <Link to={'/'} className={'navBar-logo'}>
                <span>Salvos</span>
                <div className={'salvos-logo-decoration'}>
                    <div className={'salvos-logo-underline'}></div>
                    <span className={'salvos-quiz-footer'}>Quiz</span>
                </div>
            </Link>
        </div>
    );
};

export default NavBar;

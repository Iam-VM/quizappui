import React from 'react';
import {Link} from 'react-router-dom';
import './home.css';
import SignInButtonSmall from "./signInButton";

const NavBar = (props) => {
    return(
        <div className={'navBar'}>
            <Link to={'/'} className={'navBar-logo'}>
                <span>Salvos</span>
            </Link>
            <a href={'https://quizapp-server.herokuapp.com/auth/google'} className={'a'}>
                <SignInButtonSmall />
            </a>
        </div>
    );
};

export default NavBar;
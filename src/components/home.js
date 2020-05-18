import React from 'react';
import './homeComponents/home.css';
import NavBar from './homeComponents/navBar';
import BodyText from './homeComponents/bodyText';
//import Credits from './homeComponents/credits';
import SignInButton from './homeComponents/signInButton';

//TODO: add credits

const Home = (props) => {
    return(
        <div className={'home'}>
            <NavBar className={'home-navBar'}/>
            <BodyText className={'home-bodyText'}/>
            <div className={'home-signInButtonLarge'}>
                <a href={'https://quizapp-server.herokuapp.com/auth/google'} className={'a'}>
                    <SignInButton/>
                </a>
            </div>
        </div>
    );
};

export default Home;
import React from 'react';
import NavBar from './homeComponents/navBar';
import BodyText from './homeComponents/bodyText';
import Credits from './homeComponents/credits';
import SignInButtonLarge from './homeComponents/signInButtonLarge';


const Home = (props) => {
    return(
        <div className={'home'}>
            <NavBar className={'home-navBar'}/>
            <BodyText className={'home-bodyText'}/>
            <SignInButtonLarge className={'home-signInButtonLarge'}/>
            <Credits className={'home-credits'}/>
        </div>
    );
};

export default Home;
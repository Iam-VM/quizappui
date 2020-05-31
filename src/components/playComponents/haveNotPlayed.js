import React from 'react';

const HaveNotPlayed = (props) => {
    return (
        <div className={'haveNotPlayed'}>
            <p className={'haveNotPlayedText'}>Seems like You missed Level 1 <span className={'formStar'}> !</span></p>
            <a href={'https://quizapp-server.herokuapp.com/auth/logout'} className={'a-signout'}>
                <div className={'button start-button'} >Sign Out</div>
            </a>
        </div>
    );
};

export default HaveNotPlayed;
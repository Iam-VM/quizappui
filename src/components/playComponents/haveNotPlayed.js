import React from 'react';

const HaveNotPlayed = (props) => {
    return (
        <div className={'haveNotPlayed-main'}>
            <div className={'play-navBar'}>
                <div className={'helloName'}>
                    <div className={'helloName-text'}>
                        <span className={'helloName-hello'}>Hello,</span>
                        <span className={'helloName-name'}>{`${props.stateData.firstName || `...`}`}</span>
                    </div>
                    <img src={props.stateData.picture} className={'helloName-image'} alt='dp' />
                </div>
            </div>
            <div className={'haveNotPlayed'}>
                <p className={'haveNotPlayedText'}>Seems like You missed Level 2 <span className={'formStar'}> !</span></p>
                <a href={'https://quizapp-server.herokuapp.com/auth/logout'} className={'a-signout'}>
                    <div className={'button start-button'} >Sign Out</div>
                </a>
            </div>
        </div>
    );
};

export default HaveNotPlayed;
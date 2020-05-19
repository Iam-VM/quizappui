import React from 'react';
import './play.css';
import '../homeComponents/home.css';


const DynamicGameArea = (props) => {
    const launchGame = () => {
        return(
            <div>

            </div>
        );

    };

    return(
        <div className={'gameArea'}>
            <p className={'start-text'}>You are ready to go</p>
            <div className={'start-underLine'}></div>
            <div className={'button start-button'} onClick={() => launchGame()}>Start Game</div>
        </div>
    );
};

export default DynamicGameArea;
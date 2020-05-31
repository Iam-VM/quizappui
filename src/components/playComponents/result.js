import React from 'react';
import './playQuestion.css';


const Result = (props) => {
    return(
        <div className={'limitExceeded'}>
            <h2 className={'limitExceededHead'}>Quiz Completed!</h2>
            <div className={'limitExceeded-underline'}></div>
            <h3 className={'limitExceededSubHead'}>Finished it like a <span
                className={'limitExceeded-ninja'}>Ninja!</span></h3>
            <div className={'pointsContainer'}>
                <span className={'pointsHead'}>Your Score</span>
                <span className={'pointsCount'}>{props.points}</span>
            </div>
            <a href={'https://quizapp-server.herokuapp.com/auth/logout'} className={'a-signout'}>
                <div className={'button start-button'} >Sign Out</div>
            </a>
            <div className={'developer resultDeveloper'}>
                <div className={'developer-underline'}></div>
                <span className={'developer-name'}><span className={'developerDollarSign'}>$</span>{`\{ Iam-VM }`}</span>
            </div>
        </div>
    );
};

export default Result;

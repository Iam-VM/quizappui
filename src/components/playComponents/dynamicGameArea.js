import React, {useEffect, useState} from 'react';
import {Redirect}  from 'react-router-dom';
import GameScreen from './gameScreen';
import './playStart.css';
import '../homeComponents/home.css';
import './playQuestion.css';
import Result from "./result";

const DynamicGameArea = (props) => {

    const [startClicked, setStartClicked] = useState(false);
    const [showResultState, setShowResultState] = useState(false);
    const responses = props.stateData.responses;


    const showResults = () => {
        setShowResultState(true);
    };
    if (props.stateData.progress === props.stateData.questions.length){
        return <Redirect to={'/limitexceeded'} />;
    }

    if (!startClicked){
        return (
            <div className={'gameArea'}>
                <p className={'start-text'}>You are ready to go</p>
                <div className={'start-underLine'}></div>
                <div className={'button start-button'} onClick={() => setStartClicked(true)}>Start Game</div>
            </div>
       );
    }
    if (showResultState) {
        return <Result response={responses} />
    }
    return <GameScreen stateData = {props.stateData} responses={responses} showResults={showResults} progress={props.stateData.progress} />;
};


export default DynamicGameArea;

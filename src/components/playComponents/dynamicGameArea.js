import React, {useEffect, useState} from 'react';
import GameScreen from './gameScreen';
import './playStart.css';
import '../homeComponents/home.css';
import './playQuestion.css';
import Result from "./result";
import StudentForm from './studentForm';


const DynamicGameArea = (props) => {

    const [startClicked, setStartClicked] = useState(false);
    const [showResultState, setShowResultState] = useState(false);
    const [points, setPoints] = useState(null);
    const [formFilled, setFormFilled] = useState(!(props.stateData.branch === null));

    useEffect(() => {
        setPoints(props.stateData.points);
    }, []);


    const showResults = () => {
        setShowResultState(true);
    };
    if (props.stateData.progress === props.stateData.questions.length){
        return <Result points={points} />;
    }

    if (!formFilled ){
        return <StudentForm setFormFilled={setFormFilled} />;
    }
    else {
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
            return <Result points={points} />;
        }
        return <GameScreen stateData = {props.stateData} setPoints={setPoints} points={points} showResults={showResults} progress={props.stateData.progress} />;
    }
};


export default DynamicGameArea;

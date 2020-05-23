import React,{useState, useEffect} from 'react';
import Question from "./question";
import OptionInstant from "./optionInstant";
import QuestionCount from "./questionCount";
import TimeOut from "./timeOut";
import './playQuestion.css';

//props: questionText(string), options(list of options), stateData.


const GameRenderer = (props) => {
    const [questionNumber, setQuestionNumber] = useState(props.questionNumber);
    const [timer, setTimer] = useState(20);
    const [isTimeOut, setIsTimeOut] = useState(false);

    useEffect(() => {
        if (timer === 0){
            setIsTimeOut(true);
        }
        setTimeout(() => {
            if (timer > 0){
                setTimer(timer - 1);
            }
        }, 1000);
    }, [timer]);

    const checkAnswer = (optionText) => {
        props.checkAnswer(optionText);
        setTimer(20);
    };


    if (isTimeOut){
        return <TimeOut checkAnswer={checkAnswer}/>;
    }
    else {
        return(
            <div className={'gameRenderer'}>
                <div className={'questionHead'}>
                    <div className={'questionSubHead'}>
                        <span className={'questionHeadText'}>Question: </span>
                        <QuestionCount questionNumber={props.questionNumber} totalQuestions={props.stateData.questions.length}/>
                    </div>
                    <div className={'timerContainer'}>
                        <span className={'timerHead'}>Timer</span>
                        <div className={'timer'}>{timer}</div>
                        <div className={'timerUnderLine'}></div>
                    </div>
                </div>
                <Question question={props.questionText} />
                <div className={'optionsContainer'}>
                    <ul className={'options'}>
                        {props.options.map((option) => <OptionInstant  checkAnswer={checkAnswer} optionText={option} />)}
                    </ul>
                </div>
            </div>
        );
    }

};

export default GameRenderer;

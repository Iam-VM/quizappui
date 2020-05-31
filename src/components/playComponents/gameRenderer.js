import React,{useState, useEffect} from 'react';
import Question from "./question";
import OptionInstant from "./optionInstant";
import QuestionCount from "./questionCount";
import TimeOut from "./timeOut";
import './playQuestion.css';




const GameRenderer = (props) => {
    const [timer, setTimer] = useState(props.stateData.questions[props.progress] !== undefined ? props.stateData.questions[props.progress].time : null);
    const [timeOut, setTimeOut] = useState(false);

    useEffect(() => {
        let id;
        if (timer !== null) {
            if (timer > 0){
                id = setInterval(() => setTimer(timer-1), 1200);
            }
            if (timer === 0) {
                setTimeOut(true);
            }
        }


        return () => {
            clearInterval(id);
        };
    }, [timer]);


    const refreshTimer = () => {
        if (props.questionNumber < props.stateData.questions.length) {
            setTimer(props.stateData.questions[props.progress + 1].time);
        }
    };

    const checkAnswer = (optionText, nullParam) => {
        props.checkAnswer(optionText, nullParam, props.questionNumber);
        setTimeout(() => setTimeOut(false), 1000);
        if (props.questionNumber < props.stateData.questions.length) {
            setTimer(props.stateData.questions[props.progress + 1].time);
        }
    };

    if (timeOut) {
        return <TimeOut time={4} checkAnswer={checkAnswer} />;
    }

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
            {(props.haveImage === 'true') ? <img src={`https://quizapp-server.herokuapp.com/${props.questionNumber}.jpg`} className={'questionImage'} alt={'image'} /> : null}
            <div className={'optionsContainer'}>
                <ul className={'options'}>
                    {props.options.map((option) => <OptionInstant  timer={timer} netTime={props.stateData.questions[props.progress] !== undefined ? props.stateData.questions[props.progress].time : null} refreshTimer={refreshTimer} checkAnswer={props.checkAnswer} optionText={option} questionNumber={props.questionNumber} />)}
                </ul>
            </div>
        </div>
    );
};

export default GameRenderer;

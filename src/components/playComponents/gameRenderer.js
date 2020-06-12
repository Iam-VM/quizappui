import React,{useState, useEffect} from 'react';
import Question from "./question";
import OptionInstant from "./optionInstant";
import QuestionCount from "./questionCount";
import TimeOut from "./timeOut";
import './playQuestion.css';
import crypto from 'crypto';



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

    const handleAnswerTextSubmit = (e) => {
        e.preventDefault();
        let netTime = (props.stateData.questions[props.progress] !== undefined) ? props.stateData.questions[props.progress].time : null;
        let ratio = timer/netTime;
        props.checkAnswer(e.target.elements.answerText.value, ratio, props.questionNumber);
        e.target.elements.answerText.value = '';
        refreshTimer();
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
                        <div className={'timer'}>
                        	<span className={'timerTimeMin'}>{`${(Math.floor(timer/60)) < 10 ? 0:''}${Math.floor(timer/60)}`}</span>
                            <span className={'timerMinSecSeparator'}>:</span>
                            <span className={'timerTimeSec'}>{`${(timer-(Math.floor(timer/60)*60)) < 10 ? 0:''}${timer-(Math.floor(timer/60)*60)}`}</span>
                        </div>
                        <div className={'timerUnderLine'}></div>
                    </div>
                </div>
            <Question question={props.questionText} />
            {(props.haveImage === 'TRUE') ? <img src={`https://quizapp-server.herokuapp.com/${props.questionNumber}.jpg`} className={'questionImage'} alt={'image'} /> : null}
            {
                (props.haveOptions === 'TRUE') ? <div className={'optionsContainer'}><ul className={'options'}>{props.options.map((option) => <OptionInstant  timer={timer} netTime={props.stateData.questions[props.progress] !== undefined ? props.stateData.questions[props.progress].time : null} refreshTimer={refreshTimer} checkAnswer={props.checkAnswer} optionText={option} questionNumber={props.questionNumber} />)}</ul></div>
                    :<div className={'answerTextContainer'}><form className={'answerTextForm'} onSubmit={handleAnswerTextSubmit}>
                        <label className={'answerTextLabel'}>Answer : </label>
                        <input type={'text'} className={'answerTextInput'} id={'answerText'} name={crypto.randomBytes(8).toString('hex')} />
                        <button type={'submit'} value={'submitAnswer'} className={'button answerSubmitButton'}>Submit Answer</button>
                    </form></div>
            }

        </div>
    );
};

export default GameRenderer;

import React, {useState, useEffect} from 'react';
import GameRenderer from "./gameRenderer";
import {ADD_RESPONSE} from "../../queries";
import {useMutation} from "@apollo/react-hooks";
import Cookies from 'js-cookie';
import './playQuestion.css';

//add response array and showResults func in parent

const answeredQuestionArray = [];
const GameScreen = (props) => {
    const [triggerMutation, { data }] = useMutation(ADD_RESPONSE);
    const [progress, setProgress] = useState(props.progress); //changed count to progress
    const [questionNumber, setQuestionNumber] = useState(null);
    const [haveImage, setHaveImage] = useState("");
    const [questionText, setQuestionText] = useState('');
    const [options, setOptions] = useState([]);


    useEffect(() => {
        if (progress < props.stateData.questions.length) {
            setQuestionText(props.stateData.questions[progress].question);
            setHaveImage(props.stateData.questions[progress].haveImage);
            const optionsArray = [props.stateData.questions[progress].optionOne,
                props.stateData.questions[progress].optionTwo,
                props.stateData.questions[progress].optionThree,
                props.stateData.questions[progress].optionFour];
            setOptions(optionsArray);
            setQuestionNumber(progress + 1);
        }
        if (progress === props.stateData.questions.length) {
            props.showResults();
        }
    }, [progress]);



    const triggerNextQuestion = () => {
        setProgress(progress + 1);
    };

    const addResponse = (response, point) => {
        triggerMutation({
            variables : {ID : Cookies.get('user_id'),
            progress : questionNumber,
            response : response,
            points : point}
        });
    };





    const checkAnswer = (optionText, ratio, qN) => {
        if (progress < props.stateData.questions.length) {
            if (!answeredQuestionArray.includes(qN)) {
                answeredQuestionArray.push(qN);
                if (ratio !== null) {
                    if (optionText === props.stateData.questions[progress].correctOption) {
                        let point = Math.round(ratio*100);
                        addResponse(optionText, props.points + point);
                        props.setPoints(props.points + point);
                        setTimeout(() => triggerNextQuestion(), 500);
                    }
                    else {
                        addResponse(optionText, props.points);
                        setTimeout(() => triggerNextQuestion(), 500);
                    }
                }
                else {
                    addResponse(optionText, props.points);
                    setTimeout(() => triggerNextQuestion(), 500);
                }
            }
        }
    };


    return (
        <div className={'gameScreen'}>
            <GameRenderer questionText={questionText}
                          stateData={props.stateData}
                          questionNumber={questionNumber}
                          haveImage={haveImage}
                          options={options}
                          progress={progress}
                          checkAnswer={checkAnswer}
                          totalQuestions={props.stateData.questions.length} />
        </div>
    );
};

export default GameScreen;
import React, {useState, useEffect} from 'react';
import GameRenderer from "./gameRenderer";
import {ADD_RESPONSE} from "../../queries";
import {useMutation} from "@apollo/react-hooks";
import Cookies from 'js-cookie';
import './playQuestion.css';

//add response array and showResults func in parent

const GameScreen = (props) => {
    const [triggerMutation, { data }] = useMutation(ADD_RESPONSE);
    const [progress, setProgress] = useState(props.progress); //changed count to progress
    const [questionNumber, setQuestionNumber] = useState(null);
    const [questionText, setQuestionText] = useState('');
    const [options, setOptions] = useState([]);

    useEffect(() => {
        console.log(progress);
        if (progress < props.stateData.questions.length) {
            console.log('inside if - useEffect' + progress);
            setQuestionText(props.stateData.questions[progress].question);
            const optionsArray = [props.stateData.questions[progress].optionOne,
                props.stateData.questions[progress].optionTwo,
                props.stateData.questions[progress].optionThree,
                props.stateData.questions[progress].optionFour];
            setOptions(optionsArray);
            setQuestionNumber(progress + 1);
        }
        if (progress === props.stateData.questions.length) {
            console.log('showResults called...' + progress);
            props.showResults();
        }
    }, [progress]);

    const triggerNextQuestion = () => {
        setProgress(progress + 1);
        console.log('triggerNxtquest called new' + progress);
    };

    const addResponse = (response) => {
        console.log('mutation' + progress);
        triggerMutation({
            variables : {ID : Cookies.get('user_id'),
            progress : questionNumber,
            response : response}
        }).then(() => {
            console.log('mutation success' + progress);
            props.responses.push(response);
            setTimeout(() => triggerNextQuestion(), 500);
        }).catch((err) => {console.log(err)});
    };



    const checkAnswer = (optionText) => {
        if (progress < props.stateData.questions.length){
            console.log('reached here (1) ' + progress);
            addResponse(optionText);
        }
    };

    return (
        <div className={'gameScreen'}>
            <GameRenderer questionText={questionText}
                          stateData={props.stateData}
                          questionNumber={questionNumber}
                          options={options}
                          checkAnswer={checkAnswer}
                          totalQuestions={props.stateData.questions.length} />
        </div>
    );
};

export default GameScreen;
import React from 'react';
import './playQuestion.css';

//TODO: need questionNumber and totalQuestions

const QuestionCount = (props) => {
	return (
        <div className={'counterContainer'}>
            <span className={'questionCounter'}>{props.questionNumber}/{props.totalQuestions}</span>
            <div className={'counterUnderLine'}></div>
        </div>
    );
};

export default QuestionCount;

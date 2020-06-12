import React from 'react';
import './playQuestion.css';

const Question = (props) => {
	return (
	    <div className={'question'}>
            <span className={'questionQ'}>Q.</span>
            {props.question}
	    </div>
    );
};

export default Question;

import React, {useEffect, useState} from 'react';
import './playQuestion.css';

const OptionInstant = (props) => {

	return (
        <li className={'optionInstant'}>
            <button className={'optionButton'} onClick={() => {
                if (props.netTime !== null) {
                    const ratio = props.timer/props.netTime;
                    props.checkAnswer(props.optionText, ratio, props.questionNumber);
                    props.refreshTimer();
                }
            }}>
                {props.optionText}
            </button>
        </li>
    );
};

export default OptionInstant;

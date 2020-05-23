import React, {useEffect, useState} from 'react';
import './playQuestion.css';

const OptionInstant = (props) => {

	return (
        <li className={'optionInstant'}>
            <button className={'optionButton'} onClick={() => {
                console.log('button clicked...');
                props.checkAnswer(props.optionText);
            }}>
                {props.optionText}
            </button>
        </li>
    );
};

export default OptionInstant;

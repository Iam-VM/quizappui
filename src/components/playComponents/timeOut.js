import React, {useState, useEffect} from 'react';

const TimeOut = (props) => {
    const [timer, setTimer] = useState(3);
    useEffect(() => {
        if (timer > 0){
            setTimer(timer-1);
            if (timer === 0){
                props.checkAnswer('');
            }
        }
    }, [timer]);

    return (
        <div className={'timeOut'}>
            <h2 className={'timeOutHead'}>TimeOut!!</h2>
            <div className={'timeOut-underline'}></div>
            <p>Next question in {timer}</p>
        </div>
    );
};

export default TimeOut;

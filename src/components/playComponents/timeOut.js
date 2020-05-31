import React, {useState, useEffect} from 'react';


const TimeOut = (props) => {
    const [timer, setTimer] = useState(props.time);
    let id;
    useEffect(() => {
        if (timer > 1) {
            id = setInterval(() => {
                setTimer((timer-1));
            }, 1200);
        }
        if (timer === 1) {
            props.checkAnswer('', null);
        }

        return () => {clearInterval(id)};
    }, [timer]);



    return (
        <div className={'timeOut'}>
            <h2 className={'timeOutHead'}>TimeOut!!</h2>
            <div className={'timeOut-underline'}></div>
            <div className={'timeOutContent'}>
                <span className={'timeOutP'}>Next question in </span>
                <div className={'timeOutTime'}><span className={'timeOutTimeText'}>{timer}</span></div>
            </div>
        </div>
    );
};

export default TimeOut;

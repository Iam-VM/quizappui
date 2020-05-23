import React from 'react';


const LimitExceeded = (props) => {
    return(
        <div className={'limitExceeded'}>
            <h2 className={'limitExceededHead'}>Quiz Completed!</h2>
            <h3 className={'limitExceededSubHead'}>You really did it like a Ninja!</h3>
        </div>
    );
};

export default LimitExceeded;
import React from 'react';
import UnderLine from './underLine';

const BodyText = (props) => {
    return(
        <div className={'bodyText'}>
            <div className={'bodyText-div-head'}>
                <h2 className={'bodyText-head-online'}>Online</h2>
                <h2 className={'bodyText-head-quiz'}>Quiz</h2>
            </div>
            <UnderLine />
            <h4 className={'bodyText-byLine'}>Light up your brain</h4>
        </div>
    );
};

export default BodyText;
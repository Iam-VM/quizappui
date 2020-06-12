import React from 'react';
import UnderLine from './underLine';

const BodyText = (props) => {
    return(
        <div className={'bodyText'}>
            <div className={'bodyText-div-head'}>
                <h2 className={'bodyText-head-online'}>Where</h2>
                <h2 className={'bodyText-head-quiz'}>Grey</h2>
                <h2 className={'bodyText-head-quiz'}>Matters</h2>
            </div>
            <UnderLine />
            <h4 className={'bodyText-byLine'}>HUB WAR</h4>
        </div>
    );
};

export default BodyText;
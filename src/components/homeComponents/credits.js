import React from 'react';
import UnderLine from './underLine';

const Credits = (props) => {
    return(
        <div className={'credits'}>
            <span className={'credits-head'}>Developed By:</span>
            <span className={'credits-developerName'}>Iam-VM & Mangha</span>
            <UnderLine />
        </div>
    );
};

export default Credits;
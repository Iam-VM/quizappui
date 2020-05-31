import React from 'react';

const Loading = () => {
    return (
        <div className={'errorContainerMain'}>
            <div className={'errorContainer'}>
            <span className={'errorText'}>
                Oops!! An Error occurred while fetching data
            </span>
            </div>
        </div>
    );

};

export default Loading;
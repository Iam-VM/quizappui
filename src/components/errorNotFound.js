import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

const ErrorNotFound = (props) => {
    return(
        <div className={'errorNotFound'}>
            <div className={'errorNotFound-content'}>
                <h1 className={'errorNotFound-error'}>Error</h1>
                <h1 className={'errorNotFound-code'}>#404</h1>
            </div>
            <Link to={'/'} className={'backToHome'}>Back to /</Link>
        </div>
    );
};

export default ErrorNotFound;

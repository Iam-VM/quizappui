import React from 'react';
import {FaGoogle} from 'react-icons/fa';

const SignInButton = (props) => {
    return(
        <div className={'signInButton'}>
            <FaGoogle className='signInButton-logo' />
            <p className={'signInButton-text'}>Sign In</p>
        </div>
    );
};

export default SignInButton;
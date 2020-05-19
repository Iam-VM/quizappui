import React from 'react';
import {FaGoogle} from 'react-icons/fa';

const SignInButton = (props) => {
    return(
        <div className={'button'}>
            <FaGoogle className='button-logo' />
            <p className={'button-text'}>Sign In</p>
        </div>
    );
};

export default SignInButton;
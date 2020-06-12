import React from 'react';
import {GrGoogle} from 'react-icons/gr';

const SignInButton = (props) => {
    return(
        <div className={'button'}>
            <GrGoogle className='button-logo' />
            <p className={'button-text'}>Sign In</p>
        </div>
    );
};

export default SignInButton;

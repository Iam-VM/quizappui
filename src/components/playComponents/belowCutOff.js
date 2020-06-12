import React from 'react';

const BelowCutOff = (props) => {
  return (
      <div className={'belowCutOff-main'}>
          <div className={'play-navBar'}>
              <div className={'helloName'}>
                  <div className={'helloName-text'}>
                      <span className={'helloName-hello'}>Hello,</span>
                      <span className={'helloName-name'}>{`${props.stateData.firstName || `...`}`}</span>
                  </div>
                  <img src={props.stateData.picture} className={'helloName-image'} alt='dp' />
              </div>
          </div>
          <div className={'belowCutOff'}>
            <p className={'belowCutOffText'}>Seems Like You didn't qualify Level 2<span className={'formStar'}> !</span></p>
            <div className={'belowCutOff-container'}>
                <span className={'belowCutOff-containerText'}>Your score  <span className={'belowCutOff-containerPoints'}>{props.points}</span></span>
                <span className={'belowCutOff-containerText'}>Our cutoff  <span className={'belowCutOff-containerCutOff'}>800</span></span>
            </div>
            <a href={'https://quizapp-server.herokuapp.com/auth/logout'} className={'a-signout'}>
                <div className={'button start-button'} >Sign Out</div>
            </a>
        </div>
      </div>
  );
};

export default BelowCutOff;
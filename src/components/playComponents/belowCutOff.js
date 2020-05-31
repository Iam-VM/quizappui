import React from 'react';

const BelowCutOff = (props) => {
  return (
      <div className={'belowCutOff'}>
          <p className={'belowCutOffText'}>Seems Like You didn't qualify Level 1<span className={'formStar'}> !</span></p>
          <div className={'belowCutOff-container'}>
              <span className={'belowCutOff-containerText'}>Your score  <span className={'belowCutOff-containerPoints'}>{props.points}</span></span>
              <span className={'belowCutOff-containerText'}>Our cutoff  <span className={'belowCutOff-containerCutOff'}>500</span></span>
          </div>
          <a href={'https://quizapp-server.herokuapp.com/auth/logout'} className={'a-signout'}>
              <div className={'button start-button'} >Sign Out</div>
          </a>
      </div>
  );
};

export default BelowCutOff;
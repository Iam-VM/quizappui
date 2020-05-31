import React, {Component} from 'react';
import '../App.css';

class LimitExceeded extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={'limitExceeded'}>
                <h2 className={'limitExceededHead'}>Quiz Completed!</h2>
                <div className={'limitExceeded-underline'}></div>
                <h3 className={'limitExceededSubHead'}>You really did it like a <span
                    className={'limitExceeded-ninja'}>Ninja!</span></h3>
                <div className={'pointsContainer'}>
                    <span className={'pointsHead'}>Your Score</span>
                    <span className={'pointsCount'}>{this.props.location.state.points}</span>
                </div>
            </div>
        );
    }
}

export default LimitExceeded;

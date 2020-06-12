import React from 'react';
import {Link} from 'react-router-dom';
import './playComponents/playStart.css';
import DynamicGameArea from './playComponents/dynamicGameArea';
import { useQuery } from '@apollo/react-hooks';
import Cookies from 'js-cookie';
import {GET_QUERY} from "../queries";
import Loading from './playComponents/loading';
import Error from './playComponents/error';
import HaveNotPlayed from "./playComponents/haveNotPlayed";
import BelowCutOff from "./playComponents/belowCutOff";


let stateData;

const Play = (props) => {

    const ID = Cookies.get('user_id');
    const {loading, error, data} = useQuery(GET_QUERY, {
        variables : {ID}
    });

    if (error) {
        return  <Error />;
    }
    if (loading) {
        return  <Loading />;
    }

    stateData = {...data.user};
    stateData.questions = data.questions;

    if (stateData.pointsLevelTwo < 800 && stateData.progressLevelTwo === -1) {
        return <HaveNotPlayed stateData={stateData}/>;
    }

    if (stateData.pointsLevelTwo < 800) {
        return <BelowCutOff points={stateData.pointsLevelTwo} stateData={stateData} />;
    }

    stateData.progress = stateData.progressLevelThree + 1;
    stateData.points = stateData.pointsLevelThree;

    return(
        <div className={'play'}>
            <div className={'play-navBar'}>
                {/*<Link to={'/'} className={'navBar-logo'}>*/}
                {/*    <span>Salvos</span>*/}
                {/*    <div className={'salvos-logo-decoration'}>*/}
                {/*        <div className={'salvos-logo-underline'}></div>*/}
                {/*        <span className={'salvos-quiz-footer'}>Quiz</span>*/}
                {/*    </div>*/}
                {/*</Link>*/}
                <div className={'helloName'}>
                    <div className={'helloName-text'}>
                        <span className={'helloName-hello'}>Hello,</span>
                        <span className={'helloName-name'}>{`${stateData.firstName || `...`}`}</span>
                    </div>
                    <img src={stateData.picture} className={'helloName-image'} alt='dp' />
                </div>
            </div>
            <DynamicGameArea className={'dynamicGameArea'} stateData={stateData} />
        </div>
    );
};

export default Play;

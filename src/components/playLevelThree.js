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

    if (stateData.pointsLevelTwo < 730 && stateData.progressLevelTwo === 0) {
        return <HaveNotPlayed />;
    }

    if (stateData.pointsLevelTwo < 730) {
        return <BelowCutOff points={stateData.points} />;
    }

    stateData.progress = stateData.progressLevelThree;
    stateData.points = stateData.pointsLevelThree;

    return(
        <div className={'play'}>
            <div className={'navBar'}>
                <Link to={'/'} className={'navBar-logo'}>
                    <span>Salvos</span>
                    <div className={'salvos-logo-decoration'}>
                        <div className={'salvos-logo-underline'}></div>
                        <span className={'salvos-quiz-footer'}>Quiz</span>
                    </div>
                </Link>
                <span className={'helloName'}>
                    {`Hello, ${stateData.firstName || `...`}`}
                </span>
            </div>
            <DynamicGameArea className={'dynamicGameArea'} stateData={stateData} />
        </div>
    );
};

export default Play;

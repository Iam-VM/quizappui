import React from 'react';
import {Link} from 'react-router-dom';
import './playComponents/playStart.css';
import DynamicGameArea from './playComponents/dynamicGameArea';
import { useQuery } from '@apollo/react-hooks';
import Cookies from 'js-cookie';
import {GET_QUERY} from "../queries";


let stateData;

const Play = (props) => {
    const ID = Cookies.get('user_id');
    const {loading, error, data} = useQuery(GET_QUERY, {
        variables : {ID}
    });
    if (error) {
        return  (<p>{`Error occured: ${error}`}</p>);
    }
    if (loading) {
        return  (<p>loading...</p>);
    }
    stateData = {...data.user};
    stateData.questions = data.questions;
    if (stateData.responses === null) stateData.responses = [];
    return(
        <div className={'play'}>
            <div className={'navBar'}>
                <Link to={'/'} className={'navBar-logo'}>
                    <span>Salvos</span>
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
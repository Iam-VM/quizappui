import React from 'react';
import {Link} from "react-router-dom";
import './playComponents/play.css';
import DynamicGameArea from './playComponents/dynamicGameArea';


const Play = (props) => {
    return(
        <div className={'play'}>
            <Link to={'/'} className={'salvos-logo'}>
                <span>Salvos</span>
            </Link>
            <DynamicGameArea className={'dynamicGameArea'}/>
        </div>
    );
};

export default Play;
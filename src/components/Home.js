import React from 'react';
import {Header} from '../components/Header';
import {Visitas} from '../components/Visitas';

import '../App.css';
import '../css/Home.css';

export const Home = () => {

    const isBackgroundBlue = false;

    return (
        <div className={isBackgroundBlue ? 'background-blue' : 'background-white'}>
            <Header></Header>
            <Visitas></Visitas>
        </div>
    )
}

import React from 'react';
import {Img} from 'react-image';
import Logo from '../assets/images/logo-credpago.svg';

import '../App.css';
import '../css/Header.css';

export const Header = () => {
    return (
        <div className="d-flex justify-content-between align-items-center p-4 header">
            <div>
                <Img src={Logo} alt="logo" className="logo" />
            </div>
            <div className="d-flex">
                <a href="/">MEU PERFIL</a>
                <div className="line"></div>
                <a href="/login">SAIR</a>
            </div>
            <div className="olaCorretor">
                <span>Olá, corretor!</span>
            </div>
        </div>
    )
}

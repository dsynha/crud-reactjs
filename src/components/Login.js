import React from 'react';
import {Img} from 'react-image';
import Logo from '../assets/images/logo-credpago.svg';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { Link } from 'react-router-dom';

import '../App.css';
import '../css/Login.css';

export const Login = () => {
    return (
        <div className="d-flex flex-column align-items-center login">
            <div>
                <Img src={Logo} alt="logo" className="logo" />
            </div>
            <div className="box">
                <Form>
                    <FormGroup>
                        <Label>E-mail:</Label>
                        <Input type="email"></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Senha:</Label>
                        <Input type="password"></Input>
                    </FormGroup>
                    <div className="d-flex flex-column">
                        <Button href="/home"className="entrarBtn">Entrar</Button>
                        <div className="d-flex flex-row justify-content-between">
                            <Link to="/" className="esqueciBtn">Esqueci minha senha</Link>
                            <Link to="/cadastro" className="cadastreseBtn">Cadastre-se</Link>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    )
}

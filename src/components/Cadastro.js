import React from 'react';
import {Img} from 'react-image';
import Logo from '../assets/images/logo-credpago.svg';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

import '../App.css';
import '../css/Cadastro.css';

export const Cadastro = () => {
    return (
        <div>
            <div className="d-flex flex-column align-items-center cadastro">
                <div>
                    <Img src={Logo} alt="logo" className="logo" />
                </div>
                <div className="box">
                    <Form>
                        <FormGroup>
                            <Label>Nome completo:</Label>
                            <Input type="text"></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label>E-mail:</Label>
                            <Input type="email"></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label>Senha:</Label>
                            <Input type="password"></Input>
                        </FormGroup>
                        <div className="d-flex flex-column">
                            <Button href="/login"className="okBtn">Ok</Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    )
}

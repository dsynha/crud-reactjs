import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { Modal } from 'react-bootstrap';

import '../App.css';
import '../css/Visitas.css';

export const Visitas = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);

    const [showDelete, setShowDelete] = useState(false);
    const handleCloseDelete = () => setShowDelete(false);
    const handleShowDelete = () => setShowDelete(true);

    return (
        <div className="m-4">
            <div className="d-flex justify-content-between align-items-center topo">
                <h2>Próximas visitas</h2>
                <Button className="btn addBtn" onClick={handleShow}>+ Novo agendamento</Button>
            </div>
            <div className="mt-4 tabela table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">DATA/HORA</th>
                            <th scope="col">ID DO IMÓVEL</th>
                            <th scope="col">VISITANTE</th>
                            <th scope="col">ENDEREÇO</th>
                            <th scope="col">AÇÕES</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>22/08/2020 11:00</td>
                            <td>1235848</td>
                            <td>Samuel Silva</td>
                            <td>Rua Sombrio, 123</td>
                            <td className="d-flex">
                                <Link to="/" className="editBtn" onClick={handleShowEdit}>Editar</Link>
                                <Link to="/" className="deleteBtn" onClick={handleShowDelete}>Apagar</Link>
                            </td>
                        </tr>
                        <tr>
                            <td>22/08/2020 14:00</td>
                            <td>1321</td>
                            <td>José Soares</td>
                            <td>Rua Jaguará, 55</td>
                            <td className="d-flex">
                                <Link to="/" className="editBtn" onClick={handleShowEdit}>Editar</Link>
                                <Link to="/" className="deleteBtn" onClick={handleShowDelete}>Apagar</Link>
                            </td>
                        </tr>
                        <tr>
                            <td>22/08/2020 16:00</td>
                            <td>119979556</td>
                            <td>Augusto Lima</td>
                            <td>Rua Joinville, 3812</td>
                            <td className="d-flex">
                                <Link to="/" className="editBtn" onClick={handleShowEdit}>Editar</Link>
                                <Link to="/" className="deleteBtn" onClick={handleShowDelete}>Apagar</Link>
                            </td>
                        </tr>
                        <tr>
                            <td>22/08/2020 17:30</td>
                            <td>119264412</td>
                            <td>Pedro Faria</td>
                            <td>Rua Blumenau, 420</td>
                            <td className="d-flex">
                                <Link to="/" className="editBtn" onClick={handleShowEdit}>Editar</Link>
                                <Link to="/" className="deleteBtn" onClick={handleShowDelete}>Apagar</Link>
                            </td>
                        </tr>
                        <tr>
                            <td>22/08/2020 10:00</td>
                            <td>2155542</td>
                            <td>Gilberto Figueiredo</td>
                            <td>Rua Santa Catarina, 3200</td>
                            <td className="d-flex">
                                <Link to="/" className="editBtn" onClick={handleShowEdit}>Editar</Link>
                                <Link to="/" className="deleteBtn" onClick={handleShowDelete}>Apagar</Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="modalAdicionar">
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton className="modalHeader">
                        <Modal.Title>Novo Agendamento</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form className="d-flex flex-wrap">
                            <FormGroup className="flex-fill ml-2 mr-2">
                                <Label>Data:</Label>
                                <Input type="date"></Input>
                            </FormGroup>
                            <FormGroup className="flex-fill ml-2 mr-2">
                                <Label>Hora:</Label>
                                <Input type="time"></Input>
                            </FormGroup>
                            <FormGroup className="flex-fill ml-2 mr-2">
                                <Label>Nome do visitante:</Label>
                                <Input type="text"></Input>
                            </FormGroup>
                            <FormGroup className="flex-fill ml-2 mr-2">
                                <Label>Endereço:</Label>
                                <Input type="text"></Input>
                            </FormGroup>
                            <FormGroup className="flex-fill ml-2 mr-2">
                                <Label>Número:</Label>
                                <Input type="number"></Input>
                            </FormGroup>
                            <FormGroup className="flex-fill ml-2 mr-2">
                                <Label>ID Imóvel:</Label>
                                <Input type="number"></Input>
                            </FormGroup>
                            <FormGroup className="flex-fill ml-2 mr-2">
                                <Button className="cadastrarBtn" variant="primary" onClick={handleClose}>Cadastrar Agendamento</Button>
                            </FormGroup>
                        </Form>
                    </Modal.Body>
                </Modal>
            </div>
            <div className="modalEditar">
                <Modal show={showEdit} onHide={handleCloseEdit}>
                    <Modal.Header closeButton className="modalHeader">
                        <Modal.Title>Editar Agendamento</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form className="d-flex flex-wrap">
                            <FormGroup className="flex-fill ml-2 mr-2">
                                <Label>Data:</Label>
                                <Input type="date"></Input>
                            </FormGroup>
                            <FormGroup className="flex-fill ml-2 mr-2">
                                <Label>Hora:</Label>
                                <Input type="time"></Input>
                            </FormGroup>
                            <FormGroup className="flex-fill ml-2 mr-2">
                                <Label>Nome do visitante:</Label>
                                <Input type="text"></Input>
                            </FormGroup>
                            <FormGroup className="flex-fill ml-2 mr-2">
                                <Label>Endereço:</Label>
                                <Input type="text"></Input>
                            </FormGroup>
                            <FormGroup className="flex-fill ml-2 mr-2">
                                <Label>Número:</Label>
                                <Input type="number"></Input>
                            </FormGroup>
                            <FormGroup className="flex-fill ml-2 mr-2">
                                <Label>ID Imóvel:</Label>
                                <Input type="number"></Input>
                            </FormGroup>
                            <FormGroup className="flex-fill ml-2 mr-2">
                                <Button className="cadastrarBtn" variant="primary" onClick={handleCloseEdit}>Alterar Agendamento</Button>
                            </FormGroup>
                        </Form>
                    </Modal.Body>
                </Modal>
            </div>
            <div className="modalApagar">
                <Modal show={showDelete} onHide={handleCloseDelete}>
                    <Modal.Header closeButton className="modalHeader">
                        <Modal.Title>Apagar</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="d-flex justify-content-between">
                        <span>Deseja realmente remover esta visita?</span>
                        <div className="d-flex">
                            <Button className="naoBtn" variant="secondary" onClick={handleCloseDelete}>Não</Button>
                            <Button className="simBtn" variant="primary" onClick={handleCloseDelete}>Sim</Button>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>

        </div>
    )
}
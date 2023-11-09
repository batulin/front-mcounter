import React, {useContext, useEffect, useState} from 'react';
import {Button, Col, Form, Modal, Row} from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {createClient} from "../../api/clientApi";
import {AuthContext} from "../../index";

const CreateClient = ({show, onHide}) => {
    const {client} = useContext(AuthContext);
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [birthDate, setBirthDate] = useState('');

    function formatDate(date = new Date()) {
        const year = date.toLocaleString('default', {year: 'numeric'});
        const month = date.toLocaleString('default', {
            month: '2-digit',
        });
        const day = date.toLocaleString('default', {day: '2-digit'});

        return [year, month, day].join('-');
    }

    const addClient = () => {
        createClient({
            lastName: lastName,
            firstName: firstName,
            email: email,
            phone: phone,
            birthDate: formatDate(birthDate)
        })
        .then(data => {
            setLastName('');
            setFirstName('');
            setPhone('');
            setEmail('');
            setBirthDate(null);
            client.addClient(data);
            onHide()
        })
        }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add Client
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Row>
                        <Col md={8}>
                            <Form.Group className="mb-3">
                                <Form.Label>Фамилия</Form.Label>
                                <Form.Control
                                    value={lastName}
                                    required
                                    onChange={(e) => setLastName(e.target.value)}
                                    type="text" />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Имя</Form.Label>
                                <Form.Control
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    type="text" />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email" />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Телефон</Form.Label>
                                <Form.Control
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    type="text" />
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Дата рождения</Form.Label>
                                <DatePicker selected={birthDate} onChange={(date) => setBirthDate(date)} />
                            </Form.Group>
                        </Col>
                    </Row>
            </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={addClient}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateClient;
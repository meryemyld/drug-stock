import React, { useState } from 'react'
import data from "./my_data.json"

import { ListGroup, ListGroupItem, Badge, Table, Button, Form, FormGroup, Input, Container, Col, Row } from 'reactstrap';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';


export const MyTable = () => {

    const [drugs, setDrugs] = useState(data);


    const { addFormData, setAddFormData } = useState({

        id: "",
        name: "",
        stock: "",

    });


    //FORM CHANGE

    const handleAddFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue;

        setAddFormData(newFormData);
    };





    //SUBMIT FUNCTION

    const handleAddFormSubmit = (event) => {
        event.preventDefault();

        const newDrug = {

            id: addFormData.id,
            name: addFormData.name_new,
            stock: addFormData.stock
        };

        const newDrugs = { ...drugs, newDrug }
        setDrugs(newDrugs);
    };



 
    

    // STYLE CSS
    const mystyle = {
        height: "300px",
        overflow: "auto"
    };

    const badge_style = {
        fontSize: "10px"
    };



    return (
        <div >
            <Row>
                <Col xs="8" style={mystyle}>

                    <Table striped>
                        <thead >
                            <tr >
                                <th>#</th>
                                <th>İlaç</th>
                                <th>Adet</th>
                            </tr>
                        </thead>
                        <tbody>
                            {drugs.map((element) =>
                                <tr>
                                    <th scope="row">{element.id}</th>
                                    <td>{element.name}</td>
                                    <td>{element.stock}</td>
                                    <td>
                                        <Button style={badge_style} color="primary" onClick={function edit() { }}>
                                            <FaEdit />
                                        </Button>
                                    </td>

                                    <td>
                                        <Button style={badge_style} color="danger" onClick={function delte() { }}>
                                            <FaTrashAlt />
                                        </Button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </Table>

                </Col>
                                

                <Col xs="1"></Col>


                <Col xs="3">
                    <Form onSubmit={handleAddFormSubmit}>
                        <FormGroup>
                            <h4>Enter New Drug</h4>
                            <Input
                                
                                name="id"
                                required="required"
                                placeholder="ID"
                                type="number"
                                onChange={handleAddFormChange}
                            />
                            <Input
                                
                                name="name"
                                required="required"
                                placeholder="İlaç ismi"
                                type="text"
                                onChange={handleAddFormChange}
                            />

                            <Input

                                name="stock"
                                required="required"
                                placeholder="Adet"
                                type="number"
                                onChange={handleAddFormChange}

                            />


                        </FormGroup>
                        <Button type="submit" color="success" >
                           Ekle
                        </Button>

                    </Form>
                </Col>
            </Row>
        </div>
    )
}

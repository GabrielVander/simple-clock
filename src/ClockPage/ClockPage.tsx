import React from "react";
import Clock from "./Clock/Clock";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ReactSVG } from 'react-svg'
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import './ClockPage.css';

function ClockPage() {
    return (
        <div className="App">
            <div className="App-header">
                <Navbar
                    bg="transparent"
                    fixed="top"
                    className='justify-content-center'
                >
                    <Navbar.Text style={{ color: 'white' }} >
                        Simple Clock
                    </Navbar.Text>
                </Navbar>
                <Container>
                    <Row>
                        <Col>
                            <ReactSVG
                                src={require('./undraw_time_management_30iu.svg')}
                                beforeInjection={svg => {
                                    svg.classList.add('illustration')
                                }}
                                fallback={() =>
                                    <Alert variant="danger" dismissible>
                                        <p>
                                            Failed to load illustration
                                        </p>
                                    </Alert>}
                                loading={() =>
                                    <Spinner
                                        animation='border'
                                        variant="light"
                                    />}
                            />
                            <Clock/>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default ClockPage;

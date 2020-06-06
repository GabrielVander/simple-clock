import React, {useState} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import './Clock.css';

function Clock() {
    const [date, setDate]  = useState(new Date());
    setInterval(() => setDate(new Date()), 1000);

    return (
        <Container className='custom-container'>
            <Row>
                <Col>
                    <Card className='card-container'>
                        <Card.Body>
                            <Row noGutters>
                                <Col>
                                    {date
                                        .toLocaleTimeString()
                                        .split(':')[0]}
                                </Col>
                                <Col className='border-right border-left'>
                                    {date
                                        .toLocaleTimeString()
                                        .split(':')[1]}
                                </Col>
                                <Col className='border-right border-left'>
                                    {date
                                        .toLocaleTimeString()
                                        .split(':')[2]
                                        .split(' ')[0]}
                                </Col>
                                <Col>
                                    {date
                                        .toLocaleTimeString()
                                        .split(':')[2]
                                        .split(' ')[1]}
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Clock;
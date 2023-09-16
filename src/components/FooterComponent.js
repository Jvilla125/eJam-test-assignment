import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
    return (
        <footer >
            <Container fluid>
                <Row className="footer mt-5 text-white  d-flex justify-content-between">
                    <Col className='text-center'>
                        Copyright (C) 2023
                        |
                        Clarifionsupport@clarifion.com
                    </Col>
                    <Col className="text-center ">
                        <i className="bi bi-lock"></i> Secure 256-bit SSL encryption.
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;
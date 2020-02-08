import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import preloader from '../../../assets/preloader.svg';


let Preloader = (props) => {
    return <Container>
        <Row>
            <Col>
                <img src={preloader} />
            </Col>
        </Row>
    </Container>
}

export default Preloader;
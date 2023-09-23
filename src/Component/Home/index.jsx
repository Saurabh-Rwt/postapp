import React from 'react';
import Sidebar from '../Sidebar';
import Card from '../Card'
import { Container, Col, Row } from 'react-bootstrap';

const Home = () => {
    return <>
       <section>
            <Container>
                <Row>
                    <Col lg={4}>
                        <Sidebar/>
                    </Col>
                    <Col lg={8}>
                        <Card/>
                    </Col>
                </Row>
            </Container>
       </section>
    </>;
}

export default Home;
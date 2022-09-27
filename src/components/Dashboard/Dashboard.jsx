import React from 'react';
import { Navbar } from '../Navbar/Navbar'
import SlidebarMenu from '../SlidebarMenu/SlidebarMenu'
import styles from './Dasboard.module.scss'

import 'bootstrap/dist/css/bootstrap.min.css' ;
import { Col, Container, Row } from 'react-bootstrap';
import { Request } from '../Request/Request';


const Dashboard = () => {
    return (
        <Container className={styles.backgr}>
            <Row>
                <Col lg={2} className={styles.column}>
                    <SlidebarMenu />
                </Col>
                <Col log={10}>
                    <Row>  
                        <Navbar/>
                    </Row>
                    <Row>
                        <Col log={7}>
                            <Row>

                            </Row>
                            <Row>

                            </Row>
                        </Col>
                        <Col log={3}>
                            <Row>

                            </Row>
                            <Row>

                            </Row>
                            <Row>
                                <Request/>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
       
    );
}

export default Dashboard;

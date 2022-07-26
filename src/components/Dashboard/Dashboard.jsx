import React from 'react';
import { Navbar } from '../Navbar/Navbar'
import SlidebarMenu from '../SlidebarMenu/SlidebarMenu'
import styles from './Dasboard.module.scss'
import './Dashboard.css'

import 'bootstrap/dist/css/bootstrap.min.css' ;
import { Col, Container, Row } from 'react-bootstrap';
import { Request } from '../Request/Request';
import HelloAron from './HelloAron';
import CompanyNews from './CompanyNews';


const Dashboard = () => {
    return (
        <Container className={styles.backgr}>
            <Row>
                <Col lg={2}>
                    <SlidebarMenu />
                </Col>
                <Col log={10} className={styles.column2}>
                    <Row>  
                        <Navbar/>
                    </Row>
                    <Row>
                        <Col lg={7}>
                            <Row>
                                <HelloAron/>
                            </Row>
                            <Row>
                                <CompanyNews/>
                            </Row>
                        </Col>
                        <Col lg={5}>
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

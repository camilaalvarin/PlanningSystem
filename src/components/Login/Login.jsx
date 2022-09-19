import React from 'react';
import { Footer } from '../Footer/Footer';
import styles from './Login.module.scss'
//import Eye from '../../assets/Eye.svg'
import AllLogin from './AllLogin';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';


const Login = () => {
    return (
        <>  
            <main className={styles.mainLogin}>
                <AllLogin/>
                <div className={`${styles.cardLogin} ${styles.cardLoginOk}`}>
                    <Form className={styles.formLogin}>
                        <h3 className={styles.titleLogin}>
                            Login
                        </h3>
                        <Form.Group className={styles.boxInputsLogin}>
                            <Form.Label for='email'>E-mail</Form.Label>
                            <Form.Control type='email' placeholder='example@yahoo.com' className={styles.input}></Form.Control>
                            <Form.Text id='email' ></Form.Text>
                        </Form.Group>

                        <Form.Group className={styles.boxInputsLogin}>
                            <Form.Label for='password'>Password</Form.Label>
                            <Form.Control type='password' className={styles.input}></Form.Control>
                            <Form.Text id='password'></Form.Text>
                        </Form.Group>

                        <Form.Group className={styles.checkboxLogin}>
                            <Form.Check type='checkbox' label='Keep me logged in' className={styles.childCheckboxLogin}></Form.Check>
                        </Form.Group>
                        
                        <Button type='submit' className={styles.buttonLogin}>
                            Login
                        </Button>
                        <NavLink to='/restorepassword' className={styles.restoreLogin}>Forgot my password</NavLink>
                        
                    </Form>

                </div>

            </main>
            

            <Footer/>
        </>
    );
}

export default Login;

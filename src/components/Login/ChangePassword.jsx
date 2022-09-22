import React from 'react';
import { Footer } from '../Footer/Footer';
import AllLogin from './AllLogin';
import styles from './Login.module.scss'
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';




const ChangePassword = () => {
    return (
        <>  
            <main className={styles.mainLogin}>
                <AllLogin/>
                <div className={`${styles.cardLogin} ${styles.cardLoginOk}`}>
                    <Form className={styles.formLogin}>
                        <h3 className={styles.titleLogin}>
                            Please type the new password
                        </h3>

                        <h4>
                        Please enter a new password twice to very that you entered it correctly 
                        </h4>
                    
                        
                            <Form.Group className={styles.boxInputsLogin}>
                                <Form.Label for='password'>Password</Form.Label>
                                <Form.Control type='password' className={styles.input} placeholder='Your Password'></Form.Control>
                                <Form.Text id='password'></Form.Text>
                            </Form.Group>

                            <Form.Group className={styles.boxInputsLogin}>
                                <Form.Label for='password'>Repeat Password</Form.Label>
                                <Form.Control type='password' className={styles.input} placeholder='Repeat your password'></Form.Control>
                                <Form.Text id='password'></Form.Text>
                            </Form.Group>
                         
                    
                        <NavLink to='/restorepassword' className={styles.buttonLogin}>
                                <Button type='submit'>
                            Change
                        </Button>
                        </NavLink>
                    
                    
                    </Form>

                </div>

            </main>
            

            <Footer/>
        </>
    );
}

export default ChangePassword;

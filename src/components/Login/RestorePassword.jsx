import React from 'react';
import { Footer } from '../Footer/Footer';
import styles from './Login.module.scss'
//import Eye from '../../assets/Eye.svg'
import AllLogin from './AllLogin';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

const RestorePassword = () => {
    return (
        
        <>  
            <main className={styles.mainLogin}>
                <AllLogin/>
                <div className={`${styles.cardLogin} ${styles.cardRestore}`}>
                    <Form className={styles.formLogin}>
                        <div>
                            <h3 className={`${styles.titleLogin} ${styles.titleRestoreOk}`}>
                                Restore Password
                            </h3>
                            <h4 className={styles.h4restore}>
                                Forgot your password? Enter yout email address below and well send you instructions to set up a new one.
                            </h4>
                        </div>
                       
                        <Form.Group className={styles.boxInputsLogin}>
                            <Form.Label for='email'>E-mail</Form.Label>
                            <Form.Control type='email' placeholder='example@yahoo.com' className={styles.input}></Form.Control>
                            <Form.Text id='email' ></Form.Text>
                        </Form.Group>

                        <Button type='submit' className={styles.buttonLogin}>
                            Senc Email
                        </Button>
                    </Form>

                </div>

            </main>
            

            <Footer/>
        </>
    );
}

export default RestorePassword;

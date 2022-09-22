import React, {useState} from 'react';
import { Footer } from '../Footer/Footer';
import AllLogin from './AllLogin';
import styles from './Login.module.scss'
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Eye from '../../assets/Eye.svg'
import Eyeslash from '../../assets/eye-slash.svg'


const ChangePassword = () => {
const [ShowPwd, setShowPwd] = useState(false);
const [ShowPwd2, setShowPwd2] = useState(false);
    return (
        <>  
            <main className={styles.mainLogin}>
                <AllLogin/>
                <div className={`${styles.cardLogin} ${styles.cardLoginOk}`}>
                    <Form className={styles.formLogin}>
                        <div>
                            <h3 className={`${styles.titleLogin} ${styles.titleChange}`}>
                                Please type
                            </h3>
                            <h3 className={`${styles.titleLogin} ${styles.titleChange}`}>
                                the new password
                            </h3>
                        </div>

                        <h4 className={styles.subtitleChange}>
                        Please enter a new password twice to very that you entered it correctly 
                        </h4>
                    
                        
                            <Form.Group className={styles.boxInputsLogin}>
                                <Form.Label for={ShowPwd ? 'text' : 'password'}>Password</Form.Label>
                                <Form.Control type={ShowPwd ? 'text' : 'password'} className={styles.input} placeholder='Your Password'></Form.Control>
                                <Form.Text id='password'></Form.Text>
                            </Form.Group>
                                <img src={ShowPwd ? Eye : Eyeslash} 
                                    onClick={() => setShowPwd(!ShowPwd)}
                                    className={`${styles.eye} ${styles.eyeChange1}`}
                                    ></img>
                       

                            <Form.Group className={styles.boxInputsLogin}>
                                <Form.Label for={ShowPwd2 ? 'text' : 'password'}>Repeat Password</Form.Label>
                                <Form.Control type={ShowPwd2 ? 'text' : 'password'} className={styles.input} placeholder='Repeat your password'></Form.Control>
                                <Form.Text id='password'></Form.Text>
                            </Form.Group>
                            <img src={ShowPwd2 ? Eye : Eyeslash} 
                                    onClick={() => setShowPwd2(!ShowPwd2)}
                                    className={`${styles.eye} ${styles.eyeChange2}`}
                                    ></img>
                         
                    
                        <NavLink to='/restorepassword' className={styles.buttonLogin}>
                                <Button type='submit' className={styles.textButton}>
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

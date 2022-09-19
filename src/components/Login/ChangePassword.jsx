import React from 'react';
import { Footer } from '../Footer/Footer';
import styles from './Login.module.scss'
import AllLogin from './AllLogin';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import Icon from '../../assets/Icon.svg'

const ChangePassword = () => {
    return (
<>  
            <main className={styles.mainLogin}>
                <AllLogin/>
                <div className={`${styles.cardLogin} ${styles.cardChangeOk}`}>
                    <Form className={styles.formLogin}>
                        <h3 className={`${styles.titleLogin} ${styles.titleChange}`}>
                            Password reset is complete!
                        </h3>
                        <img src={Icon}></img>
                        <div>
                            <h4 className={styles.h4restore}>
                                Your password has been set.
                            </h4>
                            <h4 className={styles.h4restore}>
                                Click on the button to sing in.
                            </h4>
                        </div>
                        
                        <NavLink to='/recoverypassword' className={`${styles.buttonLogin} `}>Change</NavLink>
                        
                    </Form>

                </div>

            </main>
            

            <Footer/>
        </>
    );
}

export default ChangePassword;

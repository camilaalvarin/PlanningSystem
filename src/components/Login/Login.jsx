import React from 'react';
import { Footer } from '../Footer/Footer';
import styles from './Login.module.scss'
//import Eye from '../../assets/Eye.svg'
import AllLogin from './AllLogin';
import { NavLink } from 'react-router-dom';


const Login = () => {
    return (
        <>  
            <main className={styles.mainLogin}>
                <AllLogin/>
                <div className={styles.cardLogin}>
                    <form className={styles.formLogin}>
                        <h3 className={styles.titleLogin}>
                            Login
                        </h3>
                        <div className={styles.boxInputsLogin}>
                            <label for='email'>E-mail</label>
                            <input id='email' type='email' placeholder='example@yahoo.com'></input>
                        </div>
                        <div className={styles.boxInputsLogin}>
                            <label for='password'>Password</label>
                            <input id='password' type='password'></input>
                        </div>
                        <div className={styles.checkboxLogin}>
                            <input type='checkbox'></input>
                            <h5 className={styles.childCheckboxLogin}>Keep me logged in</h5>
                        </div>
                        <button type='submit' className={styles.buttonLogin}>
                            Login
                        </button>
                        <NavLink to='/restorepassword' className={styles.restoreLogin}>Forgot my password</NavLink>
                        
                    </form>

                </div>

            </main>
            

            <Footer/>
        </>
    );
}

export default Login;

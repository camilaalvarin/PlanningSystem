import React from 'react';
import { Footer } from '../Footer/Footer';
import styles from './Login.module.scss'

import AllLogin from './AllLogin';


const Login = () => {
    return (
        <>  
            <main className={styles.mainLogin}>
                <AllLogin/>
                <div className={styles.cardLogin}>

                </div>

            </main>
            

            <Footer/>
        </>
    );
}

export default Login;

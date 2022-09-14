import React from 'react';
import styles from './AllLogin.module.scss'
import LogoPrincipal from '../../assets/LogoPrincipal.svg';
import TextoLogo from '../../assets/textLogo.svg'


const AllLogin = () => {
    return (
        <div className={styles.boxLogin}>
            <div className={styles.cajaLogoLogin}>
                <img src={LogoPrincipal} className={styles.logoLogin}></img>
                <img src={TextoLogo} className={styles.textLogo}></img>
            </div>
            <h2 className={styles.subTextLogin}> App Name helps you to manage your team's work </h2>
        </div>
    );
}

export default AllLogin;

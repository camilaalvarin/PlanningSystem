import React from 'react'
import styles from '../Footer/Footer.module.css'
import Logo from '../../assets/Logo.svg'
import logoName from '../../assets/logoName.svg'

export const Footer = () => {
  return (
    <div className={`${styles.footer}`}>
        <div className={`${styles.logo}`}>
            <img src={Logo} alt="Logo" />
            <img src={logoName} alt="Logo Name" />
        </div>
        <div className={`${styles.links}`}>
            <a className={`${styles.link}`} href="#">Gebruiksvoorwaarden</a>
            <div className={`${styles.tags}`}>
            <a className={`${styles.link}`} href="#">Privacy</a>
            </div>
            <a className={`${styles.link}`} href="#">Cookiebeleid</a>
        </div>
        <div className={`${styles.copyright}`}>
            <h5 className={`${styles.copyFoot}`}>Copyright © App Name 2022. Alle rechten voorbehouden.</h5>
        </div>
    </div>
  )
}




import React from 'react';
import styles from './HelloAron.module.scss'
import Person from '././svg/image.svg'

const HelloAron = () => {
    return (
        <div className={styles.fatherAron}>
            <div className={styles.saludo}>
                <h3 className={styles.aron}>Hellow Aron!</h3>
                <img src={Person} className={styles.person}></img>
            </div>
            <div className={`${styles.box} ${styles.line}`}>
                <h4 className={styles.titlesBox}>Position</h4>
                <h4 className={`${styles.titlesBox} ${styles.subtitlesBox}`}>Front-End</h4>
            </div>
            <div className={`${styles.box} ${styles.line}`}>
                <h4 className={styles.titlesBox}>Departament</h4>
                <h4 className={`${styles.titlesBox} ${styles.subtitlesBox}`}>Development</h4>
            </div>
            <div className={`${styles.box} ${styles.line}`}>
                <h4 className={styles.titlesBox}>Subordinates</h4>
                <h4 className={`${styles.titlesBox} ${styles.subtitlesBox}`}>2</h4>
            </div>
            <div className={styles.box}>
                <h4 className={styles.titlesBox}>Pending Tasks Today</h4>
                <h4 className={`${styles.titlesBox} ${styles.subtitlesBox}`}>3</h4>
            </div>
            
        </div>
    );
}

export default HelloAron;

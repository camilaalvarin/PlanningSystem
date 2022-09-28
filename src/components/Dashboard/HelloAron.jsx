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
            <div>
                <h4></h4>
                <h4></h4>
            </div>
            <img></img>
            <div>
                <h4></h4>
                <h4></h4>
            </div>
            <img></img>
            <div>
                <h4></h4>
                <h4></h4>
            </div>
            <img></img>
            <div>
                <h4></h4>
                <h4></h4>
            </div>
            
        </div>
    );
}

export default HelloAron;

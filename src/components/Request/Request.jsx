import styles from '../Request/Request.module.css'
import Checked from './svg/Checked.svg'
import FreeDay from './svg/FreeDay.svg'
import Arrow from './svg/Arrow.svg'

export const Request = () => {

    return (
            <div className={`${styles.request}`}>
                <h3 className={`${styles.title}`}>
                    Free Day Request
                </h3>
                <div className={`${styles.subRequest}`}>
                    <div className={`${styles.box1}`}>
                        <h5 className={styles.titleBox}>Request date:</h5>
                        <p className={styles.subtitleBox}>October 21, 2022</p>
                    </div>
                    <div className={`${styles.box2}`}>
                        <h5 className={styles.titleBox}>Status:</h5>
                        <div className={`${styles.box4}`}>
                            <img src={Checked}></img>
                            <p className={styles.subtitleBox2}>Aproved</p>
                        </div>
                    </div>
                </div>
                <div className={styles.boxWhite}>
                    <div className={styles.lastBox}>
                        <img src={FreeDay} className={styles.lastIcon}></img>
                        <h5 className={styles.lastTitleBox}>Make a new request</h5>
                    </div>
                    <img src={Arrow} className={styles.lastIcon2}></img>
                </div>
            </div>
    )
}
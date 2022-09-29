import styles from '../Request/Request.module.css'


export const Request = () => {

    return (
            <div className={`${styles.request}`}>
                <h3 className={`${styles.title}`}>
                    Free Day Request
                </h3>
                <div className={`${styles.subRequest}`}>
                    <div className={`${styles.box1}`}>
                        <h5 className={styles.titleBox}>Request date:</h5>
                        <p className={styles.subtitleBox}>October 21,2022</p>
                    </div>
                    <div className={`${styles.box2}`}>
                        <h5 className={styles.titleBox}>Status:</h5>
                        <div>
                            <img></img>
                            <p className={styles.subtitleBox}>Aproved 21,2022</p>
                        </div>
                    </div>
                </div>
                <div className={`${styles.box} ${styles.boxWhite}`}>
                    <div>
                        <img></img>
                        <h5 className={styles.titleBox}>Make a new request</h5>
                    </div>
                    <img></img>
                </div>
            </div>
    )
}
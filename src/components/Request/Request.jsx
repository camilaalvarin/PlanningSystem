import styles from '../Request/Request.module.css'


export const Request = () => {

    return (
        <div>
            <div className={`${styles.request}`}>
                <div className={`${styles.titleRequest}`}>
                    <h3 className={`${styles.title}`}>Free Day Request</h3>
                </div>
                <div>
                    <div className={`${styles.subRequest}`}>
                        <div className={`${styles.subs}`}>
                            <div className={`${styles.dateReq
                            }`}>
                                <h5>Request date:</h5>
                                <p>October 21,2022</p>

                            </div>
                            <div>
                                <h5>Status:</h5>
                                <p>Aproved 21,2022</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
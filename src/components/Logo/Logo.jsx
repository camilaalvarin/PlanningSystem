import LogoPrincipal from '../../assets/LogoPrincipal.svg'
import textLogo from '../../assets/textLogo.svg'
import styles from '../Logo/Logo.module.css'

export const Logo = () => {

    return (
        <div className={`${styles.logo}`}>
            <div>
                <img src={LogoPrincipal} alt="Logo Principal" />
            </div>
            <div className={`${styles.text}`}>
                <img src={textLogo} 
                alt="text logo" />
            </div>
            <div className={`${styles.sub}`}>
                <h5 className={`${styles.subText}`}>
                App Name helps you to manage your team's work
                </h5>
            </div>
        </div>
    )

}

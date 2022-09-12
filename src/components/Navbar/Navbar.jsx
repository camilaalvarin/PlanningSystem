// import {useState} from 'react'
// import { useLocation } from 'react-router-dom'
import styles from '../Navbar/Navbar.module.css'
import Dashboard from '../Svg/Dashboard'
import Schedule from '../../assets/Calendar.svg'
import Inbox from '../../assets/Message.svg'
import Payment from '../../assets/Wallet.svg'

export const Navbar = () => {
    // const navLinkStyle = ({ isActive }) => {
    //     return {
    //         color: isActive ? '#F60C87' : '#797D80'
    //     }
    // }
    // const location = useLocation().pathname;

    // const activeTag = window.location.href;
    // useEffect(() => {
    //     const tags = document.querySelectorAll('styles.tag');
    //     tags.forEach(link => {
    //         if(link.href === activeTag){
    //             link.classList.add({tagActive});
    //         }
    //     })
    // },[])
    // const tagActive = {color:'blue'}

    
    // const [bg, setColor] = useState('#797D80');

    // let ChangeFill = () => {
    //     setColor('blue');
    // }
    

  return (
    <div>
        <nav className={styles.navStyle}>
            <a href='/dashboard' className={`${styles.divTag} ${styles.tag}`}>
                <Dashboard fill='#F60C87' id="dashboard"
                alt="Dashboard" 
                 />Dashboard</a>
            
            <a href='/schedule' className={`${styles.divTag} ${styles.tag}`}>
                <img src={Schedule} className='img'
                alt="Schedule" />Schedule</a>
            
            <a href='/inbox' className={`${styles.divTag} ${styles.tag}`}>
                <img src={Inbox} 
                alt="Inbox" />Inbox</a>
            
            <a href='/payment' className={`${styles.tagEnd} ${styles.tag}`}>
                <img src={Payment} 
                alt="Payment" />Payment</a>
        </nav>
    </div>
  )
}


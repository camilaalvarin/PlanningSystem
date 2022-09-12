import {useEffect, useState} from 'react'
// import { useLocation } from 'react-router-dom'
import styles from '../Navbar/Navbar.module.css'
import Dashboard from '../Svg/Dashboard'
import Schedule from '../../assets/Calendar.svg'
import Inbox from '../../assets/Message.svg'
import Payment from '../../assets/Wallet.svg'
import {Utils} from './Utils'
import Tags from './Tags/Tags'

export const Navbar = () => {
    // const navLinkStyle = ({ isActive }) => {
    //     return {
    //         color: isActive ? '#F60C87' : '#797D80'
    //     }
    // }
    // const location = useLocation().pathname;
    // const handleRouteChange = location => {
        
    // }
    const [value] = useState('styles.active');

    // setValue(true);

    const activeTag = window.location.href;
    // useEffect(() => {
        
    //     // const tags = document.querySelectorAll('styles.tag');
    //     // tags.forEach(link => {
    //     //     if(link.href === activeTag){
    //     //         link.classList.add('active');
    //     //     }
    //     })
    // },[])
    
  return (
    <nav className={styles.navStyle}>
        {
            Utils.map((tag,i)=> {
                return <Tags
                        key={i} 
                        route = {tag.route}
                        class_name = {tag.class_name}
                        fill = {tag.fill}
                        name = {tag.name}
                        /> 

            })
        }

        {/* <a href='/dashboard' className={`${styles.divTag} ${styles.tag}`}>
            <Dashboard fill={value} id="dashboard"
            alt="Dashboard" />Dashboard</a>
        
        <a href='/schedule' className={`${styles.divTag} ${styles.tag}`}>
            <img src={Schedule} className='img'
            alt="Schedule" />Schedule</a>
        
        <a href='/inbox' className={`${styles.divTag} ${styles.tag}`}>
            <img src={Inbox} 
            alt="Inbox" />Inbox</a>
        
        <a href='/payment' className={`${styles.tagEnd} ${styles.tag}`}>
            <img src={Payment} 
            alt="Payment" />Payment</a> */}
    </nav>
  )
}


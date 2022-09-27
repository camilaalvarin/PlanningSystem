import {useState} from 'react'
import styles from '../Navbar/Navbar.module.css'
import Dashboard from '../Svg/Dashboard'
import Schedule from '../../assets/Calendar.svg'
import Inbox from '../../assets/Message.svg'
import Payment from '../../assets/Wallet.svg'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {

//funcion de botones
const [dashboard, setDashboard] = useState(true);
const [schedule, setSchedule] = useState(false);
const [inbox, setInbox] = useState(false);
const [payment, setPayment] = useState(false);
    

  return (
    <div>
        <nav className={styles.navStyle}>
            <NavLink to='/dashboard' 
                onClick={()=> {setDashboard(true); setSchedule(false); setInbox(false); setPayment(false)}}
                className={`${styles.divTag} ${styles.tag}`}>
                <Dashboard fill='#F60C87' id="dashboard"
                alt="Dashboard"/>
                Dashboard
            </NavLink>
            
            <NavLink to='/schedule' 
                onClick={()=> {setDashboard(false); setSchedule(true); setInbox(false); setPayment(false)}}
                className={`${styles.divTag} ${styles.tag}`}>
                <img src={Schedule} className='img'
                alt="Schedule" />
                Schedule
            </NavLink>
            
            <NavLink to='/inbox' 
                onClick={()=> {setDashboard(false); setSchedule(false); setInbox(true); setPayment(false)}}
                className={`${styles.divTag} ${styles.tag}`}>
                <img src={Inbox} 
                alt="Inbox" />
                Inbox
            </NavLink>
            
            <NavLink to='/payment' 
                onClick={()=> {setDashboard(false); setSchedule(false); setInbox(false); setPayment(true)}}
                className={`${styles.tagEnd} ${styles.tag}`}>
                <img src={Payment} 
                alt="Payment" />
                Payment
            </NavLink>
        </nav>
    </div>
  )
}


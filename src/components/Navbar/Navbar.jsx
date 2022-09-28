import {useState} from 'react'
import styles from '../Navbar/Navbar.module.css'
import DashboardPink from './Icons/Dashboard.svg'
import Dashboard from './Icons/DashboardPink.svg'
import Schedule from '../../assets/Calendar.svg'
import SchedulePink from '../../assets/CalendarPink.svg'
import Inbox from '../../assets/Message.svg'
import InboxPink from '../../assets/MessegePink.svg'
import Payment from '../../assets/Wallet.svg'
import PaymentPink from '../../assets/WalletPink.svg'

import { NavLink } from 'react-router-dom'

export const Navbar = () => {

//funcion de botones
const [dashboard, setDashboard] = useState(true);
const [schedule, setSchedule] = useState(false);
const [inbox, setInbox] = useState(false);
const [payment, setPayment] = useState(false);
    

  return (

        <nav className={styles.navStyle}>
            <NavLink to='/dashboard' 
                onClick={()=> {setDashboard(true); setSchedule(false); setInbox(false); setPayment(false)}}
                className={dashboard ? `${styles.divTag} ${styles.tag}` : `${styles.divTag} ${styles.tag}` }>
                <img src={dashboard ? DashboardPink : Dashboard} 
                    className={styles.icons}/>
                <h3 className={dashboard ? `${styles.titleActive}` : `${styles.titleInactive}`}>Dashboard</h3>
            </NavLink>
            
            <NavLink to='/schedule' 
                onClick={()=> {setDashboard(false); setSchedule(true); setInbox(false); setPayment(false)}}
                className={schedule ? `${styles.divTag} ${styles.tag}` : `${styles.divTag} ${styles.tag}` }>
                <img src={schedule ? SchedulePink : Schedule}
                    className={styles.icons}
                    alt="Schedule" />
                <h3 className={schedule ? `${styles.titleActive}` : `${styles.titleInactive}`}>
                    Schedule
                </h3>
            </NavLink>
            
            <NavLink to='/inbox' 
                onClick={()=> {setDashboard(false); setSchedule(false); setInbox(true); setPayment(false)}}
                className={inbox ? `${styles.divTag} ${styles.tag}` : `${styles.divTag} ${styles.tag} ` }>
                <img src={inbox ? InboxPink : Inbox} 
                    className={styles.icons}
                    alt="Inbox" />
                <h3 className={inbox ? `${styles.titleActive}` : `${styles.titleInactive}`}>
                    Inbox
                </h3>
            </NavLink>
            
            <NavLink to='/payment' 
                onClick={()=> {setDashboard(false); setSchedule(false); setInbox(false); setPayment(true)}}
                className={payment ? `${styles.divTagEnd} ${styles.tag}` : `${styles.divTagEnd} ${styles.tag}` }>
                <img src={payment ? PaymentPink : Payment} 
                    className={styles.icons}
                    alt="Payment" />
                <h3 className={payment ? `${styles.titleActive}` : `${styles.titleInactive}`}>
                    Payment
                </h3>
            </NavLink>
        </nav>

  )
}


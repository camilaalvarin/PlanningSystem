import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import styles from './SlidebarMenu.module.scss'

import Logo1 from '././svg/Logo.svg'
import Logo2 from '././svg/appname.svg'
import Home from './svg/Home.svg'
import HomeBlack from '././svg/HomeBlack.svg'
import Noti from '././svg/Notification.svg'
import NotiWhite from '././svg/NotiWhite.svg'
import Documents from '././svg/Job.svg'
import DocumentsWhite from '././svg/JobWhite.svg'
import Team from '././svg/Team.svg'
import TeamWhite from '././svg/TeamWhite.svg'
import Line from '././svg/Line.svg'
import IconSettings from '././svg/Settings.svg'
import SettingsWhite from '././svg/SettingsWhite.svg'
import Out from '././svg/Logout.svg'
import OutWhite from '././svg/LogoutWhite.svg'

export default function SlidebarMenu() {

const [homeButton, setHommeButton] = useState(true);
const [notiButton, setNotiButton] = useState(false);
const [documentsButton, setDocumentsButton] = useState(false);
const [teamButton, setTeamButton] = useState(false);
const [settings, setSettings] = useState(false);
const [logoutButton, setLogoutButton] = useState(false);


  return (
    <div className={`${styles.father}`}>
      <div 
      
      className={styles.box1}>
        <img src={Logo1}
            className={`${styles.logo1}`}></img>
        <img src={Logo2} 
            className={styles.logo2}></img>
      </div>

      {/*cominza box 2*/}
      <div className={styles.box2}>
        <NavLink to='/home' 
                  onClick={ () => {setSettings(false) ;setHommeButton(true); setNotiButton(false); setDocumentsButton(false); setTeamButton(false); setLogoutButton(false) }}

                  className={homeButton ? `${styles.item1}` : `${styles.items}`} >
            <img src={homeButton ? Home : HomeBlack} className={`${styles.itemHome} ${styles.itemBlack}`}/>
            <h3 className={homeButton ? `${styles.title1}` : `${styles.titleBlack}`}>Home</h3>
        </NavLink>
        <NavLink to='/noti'
                  onClick={ () => {setSettings(false) ;setHommeButton(false); setNotiButton(true); setDocumentsButton(false); setTeamButton(false); setLogoutButton(false) }}
                  className={notiButton ? `${styles.item1}` : `${styles.items}`} >
            <img  src={notiButton ? NotiWhite : Noti} className={`${styles.itemHome} ${styles.itemBlack}`}/>
          <h3 className={notiButton ? `${styles.title1}` : `${styles.titleBlack}`}>Notifications</h3>
        </NavLink>

        <NavLink to='/documents' 
                onClick={() => {setSettings(false) ;setHommeButton(false); setNotiButton (false); setDocumentsButton(true); setTeamButton(false); setLogoutButton(false)}}
                className={documentsButton ? `${styles.item1}` : `${styles.items}`} >
          <img className={`${styles.itemHome} ${styles.itemBlack}`}
                src={documentsButton ? DocumentsWhite : Documents}/>
          <h3 className={documentsButton ? `${styles.title1}` : `${styles.titleBlack}`}>Documents</h3>
        </NavLink>

        <NavLink to='/myteam'
                  onClick={() => {setSettings(false); setHommeButton(false); setNotiButton(false); setDocumentsButton(false); setTeamButton(true); setLogoutButton(false)} }
                  className={teamButton ? `${styles.item1}` : `${styles.items}`} >
          <img src={teamButton ? TeamWhite : Team}
                className={`${styles.itemHome} ${styles.itemBlack}`}
                alt="my team"></img>
          <h3 className={teamButton ? `${styles.title1}` : `${styles.titleBlack}`}>My Team</h3>
        </NavLink>

        {/*aca termina box 2*/}

        <img src={Line} className={styles.line}></img>
        <h4 className={styles.settings}>Settings</h4>

        <NavLink to='/settings'
                onClick={() => {setHommeButton(false); setNotiButton(false); setDocumentsButton(false); setTeamButton(false); setLogoutButton(false); setSettings(true) }}
                className={settings ? `${styles.item1}` : `${styles.items}`} >
          <img src={settings ? SettingsWhite : IconSettings}
                className={`${styles.itemHome} ${styles.itemBlack}`}/>

          <h3 className={settings? `${styles.title1}` : `${styles.titleBlack}`}>Main Settings</h3>
        </NavLink>   
        <NavLink to='/logout'
                onClick={() => {setHommeButton(false); setNotiButton(false); setDocumentsButton(false); setTeamButton(false); setLogoutButton(true); setSettings(false)  }}
                className={logoutButton ? `${styles.item1}` : `${styles.items}`} >
          <img src={logoutButton ? OutWhite: Out}
                className={`${styles.itemHome} ${styles.itemBlack}`}/>

          <h3 className={logoutButton ? `${styles.title1}` : `${styles.titleBlack}`}>Log Out</h3>
        </NavLink>
      </div>
    </div>
  )
}
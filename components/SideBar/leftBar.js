"use client"
import React from "react";
import styles from './sidebar.module.css';
import {PiWechatLogoDuotone} from 'react-icons/pi';//chat
import {MdEmail} from 'react-icons/md';//email
import {RiDashboard3Fill} from 'react-icons/ri';//dashboard
import {RiContactsBook2Fill} from 'react-icons/ri';//contact
import {SlCalender} from 'react-icons/sl';//calender
import {AiFillShop} from 'react-icons/ai';//shop
import {FaFileInvoice} from 'react-icons/fa';//Invoice
import {AiFillSetting} from 'react-icons/ai';//setting
import {BsMicrosoft} from 'react-icons/bs';//Kanban
import {PiUserRectangleFill} from 'react-icons/pi';//courses
import {MdOutlineStorage} from 'react-icons/md';//toggle
import {CiSquareMore} from 'react-icons/ci';
import {BsArrowRight} from 'react-icons/bs';
export default function LeftSidebar(){
    return <div className={styles.con}>
        <div className={styles.MainHeader}>
        <span className={styles.title}>weframetech</span>
        <span className={styles.collapse}><MdOutlineStorage/></span>
        </div>
        <div className={styles.main}>
            <p className={styles.mainMenu}>MAIN MENU</p>
            <div className={styles.menus}>
              <span className={styles.menuDiv}>
                <span className={styles.iconsp}><RiDashboard3Fill/></span>
                <span className={styles.textsp}>Dashboard</span>
              </span>
              <span className={styles.menuDiv}>
                <span className={styles.iconsp}><MdEmail/></span>
                <span className={styles.textsp}>Email</span>
              </span>
              <span className={styles.menuDiv}>
                <span className={styles.icon}><PiWechatLogoDuotone/></span>
                <span className={styles.text}>Chat</span>
              </span>
              <span className={styles.menuDiv}>
                <span className={styles.icon}><BsMicrosoft/></span>
                <span className={styles.text}>Kanban</span>
              </span>
              <span className={styles.menuDiv}>
                <span className={styles.icon}><RiContactsBook2Fill/></span>
                <span className={styles.text}>Contact</span>
              </span>
              <span className={styles.menuDiv}>
                <span className={styles.icon}><SlCalender/></span>
                <span className={styles.text}>Calender</span>
              </span>
              <span className={styles.menuDiv}>
                <span className={styles.iconsp}><PiUserRectangleFill/></span>
                <span className={styles.text}>Courses</span>
              </span>
              <span className={styles.menuDiv}>
                <span className={styles.iconsp}><AiFillShop/></span>
                <span className={styles.text}>Shop</span>
              </span>
              <span className={styles.menuDiv}>
                <span className={styles.icon}><FaFileInvoice/></span>
                <span className={styles.text}>Invoices</span>
              </span>
              <span className={styles.menuDiv}>
                <span className={styles.icon}><AiFillSetting/></span>
                <span className={styles.text}>Settings</span>
              </span>
            </div>
        </div>
        <div className={styles.footer} >
           <div className={styles.footerDiv}>
           <span className={styles.footerI}><CiSquareMore/></span>
           <span className={styles.footerText}>increase your work with kanban.</span>
           <span className={styles.footerI}><BsArrowRight/></span>
           </div>
        </div>
    </div>
}
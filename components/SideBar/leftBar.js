"use client"
import React from "react";
import styles from './sidebar.module.css';
import {AiOutlineCaretDown} from 'react-icons/ai';
import {BsFill1CircleFill} from 'react-icons/bs';
import {BsFill2CircleFill} from 'react-icons/bs';
export default function leftSidebar(){
    return <>
        <div className={styles.MainHeader}>
        <h1 className={styles.title}>weframetech</h1>
        <span className={styles.collapse}>Collapse</span>
        </div>
        <div className={styles.main}>
            <h2 className={styles.mainMenu}>MAIN MENU</h2>
            <div className={styles.menus}>
              <span className={styles.menuDiv}>
                <span className={styles.icon}>Icon</span>
                <span className={styles.text}>Dashboard</span>
              </span>
              <span className={styles.menuDiv}>
                <span className={styles.icon}>Icon</span>
                <span className={styles.text}>Email</span>
              </span>
              <span className={styles.menuDiv}>
                <span className={styles.icon}>Icon</span>
                <span className={styles.text}>Chat</span>
              </span>
              <span className={styles.menuDiv}>
                <span className={styles.icon}>Icon</span>
                <span className={styles.text}>Kanban</span>
              </span>
              <span className={styles.menuDiv}>
                <span className={styles.icon}>Icon</span>
                <span className={styles.text}>Contact</span>
              </span>
              <span className={styles.menuDiv}>
                <span className={styles.icon}>Icon</span>
                <span className={styles.text}>Calender</span>
              </span>
              <span className={styles.menuDiv}>
                <span className={styles.icon}>Icon</span>
                <span className={styles.text}>Courses</span>
              </span>
              <span className={styles.menuDiv}>
                <span className={styles.icon}>Icon</span>
                <span className={styles.text}>Shop</span>
              </span>
              <span className={styles.menuDiv}>
                <span className={styles.icon}>Icon</span>
                <span className={styles.text}>Invoices</span>
              </span>
              <span className={styles.menuDiv}>
                <span className={styles.icon}>Icon</span>
                <span className={styles.text}>Settings</span>
              </span>
            </div>
        </div>
        <div className={styles.footer} >
           <h1 className="footerText">increase your work with kanban</h1>
        </div>
    </>
}
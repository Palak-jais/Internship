"use client"
import React ,{useState} from "react"
import styles from './navbar3.module.css';
import {AiOutlineCaretDown} from 'react-icons/ai';
import Square from "../users/square";
import {TiThMenuOutline} from 'react-icons/ti';
import LeftSidebar from "../SideBar/leftBar";


export default function Nav3(){
    return <>
        <div className={styles.navParent}>
        <div className={styles.hidden}>
        <p> <span className={styles.hiddenIcon}><TiThMenuOutline/></span></p>
        <p>weframetech</p>
        </div>
        <div className={styles.navChild3}>
                <div className={styles.profile}>
                <span><button className={styles.lang}><span>English</span><span className={styles.lanIcon}><AiOutlineCaretDown/></span></button></span>
                 <Square/>
                 <div className={styles.texts}>
                    <span className={styles.text1}>Instruction Day</span>
                    <h2 className={styles.text2}>Super Admin</h2>
                 </div>
                 <div className={styles.down}><AiOutlineCaretDown/></div>

                </div>
            </div>

       </div>
    </>
}
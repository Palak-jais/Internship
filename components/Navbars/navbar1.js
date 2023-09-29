"use client"
import React from "react"
import styles from './navbar1.module.css';
import Square from "../users/square";
import {BiSolidBell} from 'react-icons/bi';
import {BsBagDashFill} from 'react-icons/bs';
import {PiUserRectangleFill} from 'react-icons/pi';
import {AiOutlineFileDone} from 'react-icons/ai';
import {VscSearch} from 'react-icons/vsc';
import {AiOutlineCaretDown} from 'react-icons/ai';
import {BsFill1CircleFill} from 'react-icons/bs';
import {BsFill2CircleFill} from 'react-icons/bs';
import {BsFill5CircleFill} from 'react-icons/bs';
import {BsFill9CircleFill} from 'react-icons/bs';
export default function Nav1(){
    return <>
        <div className={styles.navParent}>
        <div>
            <button className={styles.navChild1}>
                <span className={styles.searchIcon}><VscSearch/></span> 
                <span className={styles.searchText}>Search here</span>
            </button>
            </div>
            <div className={styles.navChild2}>

                <div className={styles.icons}>
                <p className={styles.menu}>open menus</p>

                   <span className={styles.icon}><span className={styles.ic}><BiSolidBell/></span> 
                   <span className={styles.no}><BsFill9CircleFill/></span>
                   </span>
                   
                   <span className={styles.icon}><span className={styles.ic}><PiUserRectangleFill/></span> 
                   <span className={styles.no}><BsFill5CircleFill/></span>
                   </span>

                   <span className={styles.icon}><span className={styles.ic}><AiOutlineFileDone/></span> 
                   <span className={styles.no}><BsFill2CircleFill/></span>
                   </span>

                   <span className={styles.icon}><span className={styles.ic}><BsBagDashFill/></span> 
                   <span className={styles.nos}><BsFill1CircleFill/></span>
                   </span>
                                     
                </div>            
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
"use client"
import React from "react"
import styles from './card.module.css';
import StatusBar from "../users/statusBar";
import Users from "../users/user";
import Dot from "../users/dot";
import {BsClock} from 'react-icons/bs';
export default function Card(){
    return <>
        <div className={styles.parent}>
        <span className={styles.top}>
            <span className={styles.imp}><span><Dot/></span><span>Important</span></span>
            <span className={styles.dot}>...</span>
        </span>
        <div className={styles.child}>
        <p>Create sign up sheets for holiday student/parent conference</p>
        </div>
        <div><StatusBar/></div>
        <div className={styles.top}>
            <p className={styles.status}><Users/></p>
            <p className={styles.due}><span className={styles.clock}><BsClock/></span>Due in 4 days</p>
        </div>
        </div>
    </>
}
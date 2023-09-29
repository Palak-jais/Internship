"use client"
import React from "react";
import styles from './user.module.css';
export default function UserNav(){
    return <>
        <div className={styles.userparent}>
            <div className={styles.userChild}></div>
            <div className={styles.userChild}></div>
            <div className={styles.userChild}></div>
            <div className={styles.userChild}></div>
            <div className={styles.userChildActive}><span className={styles.no} >5+</span></div>
        </div>
    </>
}
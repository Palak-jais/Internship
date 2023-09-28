"use client"
import React from "react";
import styles from './user.module.css';
export default function Users(){
    return <>
        <div className={styles.userparent}>
            <div className={styles.userChild}></div>
            <div className={styles.userChild}></div>
            <div className={styles.userChild}></div>
            <div className={styles.userChild}></div>
        </div>
    </>
}
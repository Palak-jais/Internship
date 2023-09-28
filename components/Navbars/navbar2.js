"use client"
import React from "react";
import styles from './navbar.module.css';
import StatusBar from "../users/statusBar";
import {BiSolidUserPlus} from 'react-icons/bi';
import {BiSolidCommentDetail} from 'react-icons/bi';
import {BsFillArrowLeftCircleFill} from 'react-icons/bs';
import Users from "../users/user";
export default function Nav2(){
    return <>
        <div className={styles.Nav2Parent}>
         <div className={styles.Nav2Child1}>
          <span>School November Tasks</span> 
          <span>Centered Martial Arts</span> 
         </div>
         <div className={styles.Nav2Child2}>Created by Instructor Day on November 31,2022</div>
         <div className={styles.Nav2Child3}>
         <div className={styles.leftChild3}>
          <span><Users/></span>
          <button className={styles.invite}> Invite People </button>
          <button className={styles.private}> Private </button>
          <button className={styles.edit}> Edit </button>
          <button className={styles.comments}> 45 Comments </button>
          </div>
          <div className={styles.leftChild3}>
           <span>Total Progress 60%</span>
            <span><statusbar/></span>
          </div>
         </div>
        </div>
    </>
}
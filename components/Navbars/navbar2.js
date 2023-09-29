"use client"
import React from "react";
import styles from './navbar.module.css';
import StatusBarNav from "../users/statusBarNav";
import {BiSolidUserPlus} from 'react-icons/bi';
import {BiSolidCommentDetail} from 'react-icons/bi';
import {BsFillArrowLeftCircleFill} from 'react-icons/bs';
import Ring from "../users/ring";
import {BiDotsVerticalRounded} from 'react-icons/bi';
import UserNav from "../users/UserNav";

export default function Nav2(){
    return <>
        <div className={styles.Nav2Parent}>
        <span className={styles.arrow}><BsFillArrowLeftCircleFill/></span>
        <div className={styles.collapse}>
         <div className={styles.Nav2Child1}>
          <span>School November Tasks
          <div className={styles.Nav2Child2}>Created by Instructor Day on November 31,2022</div>
          </span> 
          <div className={styles.child1RightInfoParent}>
          <div className={styles.child1RightInfo}>
          <span className={styles.child1Right}>Centered Martial Arts</span> 
          <h3 className={styles.child1Text}>sunnywale,ca</h3>
          </div>
          <div><Ring/></div>
          <div className={styles.rightDots}><BiDotsVerticalRounded/></div>
          </div>
         </div>
         <div className={styles.Nav2Child3}>
         <div className={styles.leftChild3}>
          <span><UserNav/></span>
          <button className={styles.invite}><span className={styles.userIcon}><BiSolidUserPlus/></span><span  className={styles.userText}>Invite People</span></button>
          <button className={styles.private}> Private </button>
          <button className={styles.edit}> Edit </button>
          <button className={styles.comments}><span className={styles.commIcon}><BiSolidCommentDetail/></span><span className={styles.userComm}>Comments</span></button>
          </div>
          <div className={styles.RightChild3}>
           <span className={styles.progress}><span className={styles.progressBar}>Total Progress 60% </span><span><StatusBarNav/></span></span>
          </div>
         </div>
         </div>
        </div>
    </>
}
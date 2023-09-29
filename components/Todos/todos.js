import React from "react";
import Card from "../Cards/card";
import {AiFillPlusSquare} from 'react-icons/ai';
import styles from './todos.module.css';
import MoveCard from "../Cards/moveCards";
export default function Todos(){
    return <>
       <div className={styles.Parent}>
          <div className={styles.child}>
          <div className={styles.top}>
          <p className={styles.name}>To do List</p>
          <p className={styles.add}><AiFillPlusSquare/></p>
          </div>
            
            <div className={styles.items}>
                <Card/>
                <Card/>
                <Card/>
            </div>
          </div>
          <div className={styles.child}>
          <div className={styles.top}>
          <p className={styles.name}>In Progress</p>
          <p className={styles.addsp}><AiFillPlusSquare/></p>
          </div>
            <div className={styles.items}>
                <Card/>
                <Card/>
                
            </div>
          </div>
          <div className={styles.child}>
          <div className={styles.top}>
          <p className={styles.name}>Done</p>
          <p className={styles.addsp}><AiFillPlusSquare/></p>
          </div>
            <div className={styles.items}>
                <Card/>
                <Card/>
                <Card/>
            </div>
          </div>
          <div className={styles.child}>
          <div className={styles.top}>
          <p className={styles.name}>Revised</p>
          <p className={styles.addsp}><AiFillPlusSquare/></p>
          </div>
            <div className={styles.items}>   
            <MoveCard/>      
            </div>
          </div>
          </div>
       
    </>
}
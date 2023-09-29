import React from 'react'
import styles from './page.module.css'
import Nav1 from '../../components/Navbars/navbar1';
import Nav2 from '../../components/Navbars/navbar2';
import LeftSidebar from '../../components/SideBar/leftBar';
import Todos from '../../components/Todos/todos';

export default function Home() {
  return (
    <main className={styles.main}>
    <div className={styles.mainParent}>
  <div className= {styles.mainChild1}>
    <LeftSidebar/>
    </div>
    <div className={styles.mainChild2}>
    <Nav1/>
     <Nav2/> 
     <Todos/>
    </div>
    </div>
    </main>
  )
}

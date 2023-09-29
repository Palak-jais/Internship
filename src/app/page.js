import React from 'react'
import styles from './page.module.css'
import Nav1 from '../../components/Navbars/navbar1';
import Nav2 from '../../components/Navbars/navbar2';

export default function Home() {
  return (
    <main className={styles.main}>
     <Nav1/>
     <Nav2/> 
    
    </main>
  )
}

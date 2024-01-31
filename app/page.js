import React from 'react'
import styles from '../styles/style.module.css'
import Link from 'next/link'
import MainLayout from '@/components/mainlayout.js';

const Home = () => {
  return (
    <MainLayout>
      <div className={styles.home}>
  
        <div className={styles.links}>
          <Link href="/sos">
            <div>Summer of Science</div>
            <span>by MnP Club</span>
          </Link>
  
          <Link href="https://itc.gymkhana.iitb.ac.in/wncc/soc/">
            <div>Season of Codes</div>
            <span>by WnCC Club</span>
          </Link>
  
          <Link href="/ksp">
            <div>Krittika Summer Projects</div>
            <span>by Krittika Club</span>
          </Link>
  
          <Link href="/itsp">
            <div>Institute Technical Summer Projects</div>
            <span></span>
          </Link>
  
        </div>
        <p>
          Institute Technical Summer Activities aka ITSA is an annual program organized by ITC.
          The aim is to provide first-hand technical exposure over the period of summer vacations. 
          <br />
          It also serves as a platform where one explores a field not aligned with their own major. <br /> 
          Students are encouraged to also target some real-life problems that can be solved using technology.
        </p>
  
      </div>
    </MainLayout>
  );
};

export default Home;

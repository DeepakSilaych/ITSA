'use client';

import { usePathname } from 'next/navigation'
import styles from './page.module.css';
import CursorBackground from '@/components/mouse.js';
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

function MainLayout({ children }) {
  const pathname = usePathname()


  console.log('Current Path:',pathname);

  return (
    <div className={inter.className}>
      <div className={styles.container}>
        <CursorBackground />
        <header className={styles.header}>
          <a href="https://itc.gymkhana.iitb.ac.in/">
            <img src="/logo.png" alt="ITC Logo" />
          </a>
          <h1>Institute Technical Summer Activities</h1>
        </header>

        <main className={styles.main}>
          {children}
        </main>

        <footer className={styles.footer}>
          <p>&copy; 2024 ITSA | Created by Web Team with <a href="https://www.deepaksilaych.tech/">🤍</a></p>
        </footer>
      </div>
    </div>
  );
};

export default MainLayout;

'use client';

import { usePathname } from 'next/navigation'
import styles from './page.module.css';
import CursorBackground from '@/components/mouse.js';
import { Inter } from "next/font/google";
import Head from 'next/head';
import Link from 'next/link';

const metadata = {
  title: "ITSA 2024 | Institute Technical Summer Activities",
  description: "Institute Technical Summer Activities aka ITSA is an annual program organized by Institute Technical Council of IIT Bombay. The aim is to provide first-hand technical exposure over the period of summer vacations.  It also serves as a platform where one explores a field not aligned with their own major.  Students are encouraged to also target some real-life problems that can be solved using technology. Add created by Deepak Silaych, visit https://www.deepaksilaych.tech",
};

const inter = Inter({ subsets: ["latin"] });

function MainLayout({ children }) {
  const pathname = usePathname()


  console.log('Current Path:',pathname);

  return (
    <div className={inter.className}>
      <Head>
        <meta charSet="utf-8" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://itc.gymkhana.iitb.ac.in/techgc/static/media/itclogo.9a070c01125ecad0b3be.png" />
      </Head>
      <div className={styles.container}>
        <CursorBackground />
        <header className={styles.header}>
          <a href="https://itc.gymkhana.iitb.ac.in/">
            <img src="/logo.png" alt="ITC Logo" />
          </a>
          <Link href="/"> <h1>Institute Technical Summer Activities</h1> </Link>
        </header>

        <main className={styles.main}>
          {children}
        </main>

        <footer className={styles.footer}>
          <p>&copy; 2024 ITSA |  Created by Web Team with <a href="https://www.deepaksilaych.tech/">🤍</a></p>
        </footer>
      </div>
    </div>
  );
};

export default MainLayout;

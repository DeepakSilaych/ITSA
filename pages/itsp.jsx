import MainLayout from '@/components/mainlayout'
import React from 'react'
import styles from '@/styles/style.module.css'
import Head from 'next/head'

const pdfUrl = '../components/itsp23.pdf'


function ITSP() {
  return (
    <MainLayout>
      <Head>
        <title>Institute Technical Summer Projects</title>
        <meta name="description" content="ITSP is an annual program organized by ITC. The aim is to provide first-hand technical exposure over the period of summer vacations. Here you can show past year projects."/>
      </Head>
      <iframe className={styles.itsppdf} src="https://drive.google.com/file/d/1F3P4xpkuDAXDAtsU_CqTOv4yA9oonKFl/preview" width="640" height="480" allow="autoplay"/>
    </MainLayout>
  )
}

export default ITSP
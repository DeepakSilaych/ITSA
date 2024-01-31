import MainLayout from '@/components/mainlayout'
import React from 'react'
import styles from '@/styles/style.module.css'

const pdfUrl = '../components/itsp23.pdf'


function ITSP() {
  return (
    <MainLayout>
      <iframe className={styles.itsppdf} src="https://drive.google.com/file/d/1F3P4xpkuDAXDAtsU_CqTOv4yA9oonKFl/preview" width="640" height="480" allow="autoplay"/>
    </MainLayout>
  )
}

export default ITSP
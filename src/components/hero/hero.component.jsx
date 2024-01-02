import React from 'react'
import styles from './hero.module.css'

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroContactsContainer}>
        <span>Icon</span>
        <span>Icon</span>
        <span>Icon</span>
        <span>Icon</span>
      </div>
      <div className={styles.heroMainContainer}>
        <div className={styles.heroMainText}>
          <h3>HI, MY NAME IS</h3>
        </div>
        <div className={styles.heroButtonsContainer}>
          <div className={styles.heroButton}>
            <span>View Portfolio</span>
          </div>
          <div className={styles.heroButton}>
            <span>Get in Touch</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

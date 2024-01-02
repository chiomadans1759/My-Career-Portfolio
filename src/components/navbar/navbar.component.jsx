import React from 'react'
import styles from './navbar.module.css'

const Navbar = () => {
  return (
    <div id="navbar" className={styles.navbarContainer}>
      <div>
        <h3>Logo</h3>
      </div>
      <div className={styles.navbarItemsContainer}>
        <h3>Home</h3>
        <h3>About me</h3>
        <h3>Portfolio</h3>
        <h3>Contact me</h3>
        <div className={styles.hireMeButton}>
          <span>Hire me</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar

import React from 'react'
import styles from './about.module.css'

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <div>
        <h3>WHO AM I?</h3>
      </div>
      <div className={styles.aboutText}>
        <p>
          Hello! My name is Okpala Oluchukwu and I am a self taught frontend
          developer. The scope of my work is mostly includes responsive design,
          design to html css js, CSS/JS annimations, jquery, react, firebase,
          REST APIs and other works based on web development and javascript.
          That being said, I like learning all aspects of web development and
          take pride in my fullstack work. Because of this, I am always open to
          new projects in new development environments. Hello! My name is Okpala
          Oluchukwu and I am a self taught frontend developer. The scope of my
          work is mostly includes responsive design, design to html css js,
          CSS/JS annimations, jquery, react, firebase, REST APIs and other works
          based on web development and javascript. That being said, I like
          learning all aspects of web development and take pride in my fullstack
          work. Because of this, I am always open to new projects in new
          development environments.
        </p>
      </div>
      <div className={styles.aboutStatisticsContainer}>
        <div className={styles.aboutStatistics}>
          <h2>200+</h2>
          <h3>Assets designed</h3>
          <p>Hard working and learning of 3+ years makes me suitable</p>
        </div>
        <hr className={styles.aboutDivider} />
        <div className={styles.aboutStatistics}>
          <h2>200+</h2>
          <h3>Assets designed</h3>
          <p>Hard working and learning of 3+ years makes me suitable</p>
        </div>
        <hr className={styles.aboutDivider} />
        <div className={styles.aboutStatistics}>
          <h2>200+</h2>
          <h3>Assets designed</h3>
          <p>Hard working and learning of 3+ years makes me suitable</p>
        </div>
        <hr className={styles.aboutDivider} />
        <div className={styles.aboutStatistics}>
          <h2>200+</h2>
          <h3>Assets designed</h3>
          <p>Hard working and learning of 3+ years makes me suitable</p>
        </div>
      </div>
    </div>
  )
}

export default About

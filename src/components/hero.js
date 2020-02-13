import React from 'react'
import Img from 'gatsby-image'

import styles from './hero.module.css'

export default ({ data }) => (
  <div className={styles.hero}>
    <div className={styles.heroBg} style={{height: 350}}>
      <div  className={styles.heroImage} style={{backgroundImage: `url(${ data.heroImage.fluid.src })`}} />
    </div>
    <div style={{display: 'flex', justifyContent:'center', alignItems: 'center'}}>
      <div className={styles.heroDetails}>
        <h3 className={styles.heroHeadline}>{data.name} &#x1F1E8;&#x1F1F7;</h3>
        <p className={styles.heroTitle}>{data.title}</p>
        <p>{data.shortBio.shortBio}</p>
      </div>
    </div>
  </div>
)


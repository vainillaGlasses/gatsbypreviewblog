import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'
import logo from "../../static/logo.png"

export default () => (
  <nav role="navigation">
    <ul className={styles.navigation}>
      <li className={styles.navigationLogo}>
        <img src={logo} alt="Logo" style={{width: 50, height: 50}}/>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/">Home</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/">Blog</Link>
      </li>
    </ul>
  </nav>
)

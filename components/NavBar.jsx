import React, { useState } from 'react';
import styles from '../styles/NavBar.module.scss';

export default function NavBar() {
  return (
    <div className={styles.navBarContainer}>
      <nav className={styles.navBar}>
        <div className={styles.navBarLogo}>
          <img src="https://cdn.sanity.io/images/oyf3dba6/production/e442b62447bb9190a967a63de8d92d7ab1103d90-1200x1240.png" alt="Logo"/>
        </div>
        <ul className={styles.navLinks}>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
}

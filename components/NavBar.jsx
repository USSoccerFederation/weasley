'use client'

import React, { useState } from 'react';
import styles from '../styles/NavBar.module.scss';
import { useUser } from '@auth0/nextjs-auth0/client';

export default function NavBar() {
  const { user } = useUser();

  return (
    <div className={styles.navBarContainer}>
      <nav className={styles.navBar}>
        <div className={styles.navBarLogo}>
          <img src="https://cdn.sanity.io/images/oyf3dba6/production/e442b62447bb9190a967a63de8d92d7ab1103d90-1200x1240.png" alt="Logo"/>
        </div>
        <ul className={styles.navLinks}>
          {user ? (
            <li><a href="#">{user.name}</a></li>
          ) : (
            <li><a href="#">Home</a></li>
          )}
          <li><a href="#">About</a></li>
        </ul>
      </nav>
    </div>
  );
}

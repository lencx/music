/**
 * @author: lencx
 * @create_at: Jul 08, 2020
 */

import React from 'react';

import MGrid from '/@comps/MGrid';
import styles from './mgrid.module.scss';

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <MGrid />
      </div>
    </div>
  )
}
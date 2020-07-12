/**
 * @author: lencx
 * @create_at: Jul 08, 2020
 */

import React, { useState } from 'react';
import cns from 'classnames';
import styles from './cell.module.scss';

export default function MCell() {
  const [active, setActive] = useState(false);
  const handleAction = () => {
    setActive(!active);
  }
  return (
    <div
      className={cns('m-cell', styles.cell, { [styles.active]: active })}
      onClick={handleAction}
    />
  )
}
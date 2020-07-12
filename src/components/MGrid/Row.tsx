/**
 * @author: lencx
 * @create_at: Jul 08, 2020
 */

import React from 'react';

import Cell from './Cell';

export default function MRow() {
  return (
    <div>
      {new Array(12).fill(0).map((_, i) => {
        return <Cell key={i} />
      })}
    </div>
  )
}
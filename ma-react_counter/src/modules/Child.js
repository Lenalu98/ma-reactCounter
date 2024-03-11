import React from 'react';
import { useGrid } from './GridContext';

function Cell({ index }) {
const { cellStates, toggleCell } = useGrid();
const isOn = cellStates[index];
  const style = {
    width: '100px',
    height: '100px',
    border: '1px solid grey',
    backgroundColor: isOn ? 'black' : 'white',
  };

  return <div style={style} onClick={() => toggleCell(index)}></div>;
}

export default Cell;
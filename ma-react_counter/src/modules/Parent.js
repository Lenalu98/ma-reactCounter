import React from 'react';
import Cell from './Child';
import { GridProvider, useGrid } from './GridContext';


function Grid() {
  const { cellStates } = useGrid();
  return (
    <div>
      <div>Count: {cellStates.filter(state => state).length}</div>
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        maxWidth: '216px',
        margin: 'auto'
      }}>
        {cellStates.map((_, index) => (
          <Cell key={index} index={index} />
        ))}
      </div>
    </div>
  );
}

export default function GridContainer() {
    return (
      <GridProvider>
        <Grid />
      </GridProvider>
    );
  }

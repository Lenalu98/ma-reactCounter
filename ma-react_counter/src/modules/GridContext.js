import React, { createContext, useContext, useState } from 'react';

const GridContext = createContext();

export function useGrid() {
  return useContext(GridContext);
}

export function GridProvider({ children }) {
  const [cellStates, setCellStates] = useState([false, false, false, false]);

  const toggleCell = (index) => {
    setCellStates(currentStates => {
      const newStates = [...currentStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  return (
    <GridContext.Provider value={{ cellStates, toggleCell }}>
      {children}
    </GridContext.Provider>
  );
}

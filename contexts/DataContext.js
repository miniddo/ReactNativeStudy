import React, { createContext } from 'react';

const DataContext = createContext({
  name: 'miniddo',
  gender: 'female',
  age: 20
});

export default DataContext;
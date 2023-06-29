import React, { useContext, useState, createContext } from 'react';

const RandomNumberContext = createContext();

const RandomNumberProvider = ({ children }) => {
  const [numberList, setNumberList] = useState([]);

  return (
    <RandomNumberContext.Provider value={{ numberList, setNumberList }}>
      {children}
    </RandomNumberContext.Provider>
  );
};

export const useRandomNumberContext = () => {
  return useContext(RandomNumberContext);
};

export default RandomNumberProvider;

import React, { useContext, useState, createContext } from 'react';

const RandomNumberContext = createContext();

const RandomNumberProvider = ({ children }) => {
  const [numberList, setNumberList] = useState([]);
  const [isBingo, setIsBingo] = useState(false);

  return (
    <RandomNumberContext.Provider value={{ numberList, setNumberList, isBingo, setIsBingo }}>
      {children}
    </RandomNumberContext.Provider>
  );
};

export const useRandomNumberContext = () => {
  return useContext(RandomNumberContext);
};

export default RandomNumberProvider;

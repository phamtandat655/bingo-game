import React, { memo, useState } from 'react';
import './RandomNumberInput.scss';
import { useRandomNumberContext } from '../../context/RandomNumberProvider';

const RandomNumberInput = () => {
  const [inputValue, setInputValue] = useState('');
  const { numberList, setNumberList } = useRandomNumberContext();

  const handleChangeInput = (e) => {
    setInputValue(e.target.value);
  };

  const handlePressEnter = (e) => {
    if (e.key === 'Enter') {
      let value = parseInt(inputValue);
      if (!numberList.includes(value) && value > 0 && value < 91) {
        setNumberList((prevState) => [value, ...prevState]);
      } else {
        if (numberList.includes(value)) {
          alert('This random number already exists !');
        } else {
          alert('The random number not in range ! (1 -> 90)');
        }
      }
      setInputValue('');
    }
  };

  return (
    <div className="wrapper">
      <input
        type="number"
        placeholder="Enter random numbers..."
        value={inputValue}
        onChange={handleChangeInput}
        onKeyDown={handlePressEnter}
      />
      <button onClick={(e) => setNumberList([])}>RESET</button>
    </div>
  );
};

export default memo(RandomNumberInput);

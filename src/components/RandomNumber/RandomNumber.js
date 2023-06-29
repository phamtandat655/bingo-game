import { memo } from 'react';
import { useRandomNumberContext } from '../../context/RandomNumberProvider';
import './RandomNumber.scss';

const RandomNumber = () => {
  const { numberList, setNumberList } = useRandomNumberContext();

  const handleOnclickNumber = (number) => {
    const newNumberList = numberList.filter((n) => n !== number);
    setNumberList(newNumberList);
  };

  return (
    <div className="randomnumber-wrapper">
      <h3>The number has been random !</h3>
      <div className="randomnumber-container">
        {numberList.map((number, index) => {
          return (
            <div key={index} onClick={(e) => handleOnclickNumber(number)}>
              {number}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default memo(RandomNumber);

import React, { memo } from 'react';
import './RowInTicket.scss';
import Number from '../Number/Number';
import { useRandomNumberContext } from '../../context/RandomNumberProvider';

const RowInTicket = ({ numberOfRowList }) => {
  const { numberList } = useRandomNumberContext();

  return (
    <div className="row-wrapper">
      {numberOfRowList.map((number, index) => {
        return (
          <Number
            number={number}
            key={index}
            clicked={numberList.includes(number) ? true : false}
          />
        );
      })}
    </div>
  );
};

export default memo(RowInTicket);

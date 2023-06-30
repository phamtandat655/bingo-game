import React, { memo, useEffect, useState } from 'react';
import './Ticket.scss';
import RowInTicket from '../RowInTicket/RowInTicket';
import { useRandomNumberContext } from '../../context/RandomNumberProvider';

const Ticket = ({ numberArr, nameOfTicket }) => {
  const { numberList, setIsBingo } = useRandomNumberContext();
  const [bingo, setBingo] = useState('');

  useEffect(() => {
    for (let i = 0; i < numberArr.length; i++) {
      let checkArr = numberList.filter((n) => numberArr[i].includes(n));
      if (checkArr.length >= 5) {
        setIsBingo(true);
        setBingo('bingo');

        setTimeout(() => {
          if (bingo !== 'bingo') alert(`${nameOfTicket} has won bingo ! Bingo at line ${i + 1}`);
        }, 500);

        return;
      } else {
        if (bingo === 'bingo') setIsBingo(false);
        setBingo('');
      }
    }

    if (numberList.length < 1) {
      setIsBingo(false);
      setBingo('');
    }
  }, [numberList, numberArr, nameOfTicket, bingo, setIsBingo]);

  // 'bingo'
  return (
    <div className={`ticket-wrapper ${bingo}`}>
      <div className="ticket-header">{nameOfTicket && nameOfTicket}</div>
      <div className="ticket-container">
        <div className="ticket-left">
          {numberArr.map((numberOfRowList, index) => {
            if (index >= numberArr.length / 2) {
              return null;
            }
            return <RowInTicket numberOfRowList={numberOfRowList} key={index} />;
          })}
        </div>
        <div className="ticket-right">
          {numberArr.map((numberOfRowList, index) => {
            if (index >= numberArr.length / 2) {
              return <RowInTicket numberOfRowList={numberOfRowList} key={index} />;
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
};

export default memo(Ticket);

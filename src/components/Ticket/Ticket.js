import React, { memo, useEffect, useState } from 'react';
import './Ticket.scss';
import RowInTicket from '../RowInTicket/RowInTicket';
import { useRandomNumberContext } from '../../context/RandomNumberProvider';

const Ticket = ({ numberArr, numberOfTicket }) => {
  const { numberList } = useRandomNumberContext();
  const [bingo, setBingo] = useState('');

  useEffect(() => {
    for (let i = 0; i < numberArr.length; i++) {
      let checkArr = numberList.filter((n) => numberArr[i].includes(n));
      if (checkArr.length >= 5) {
        setBingo('bingo');

        setTimeout(() => {
          alert(`Player number ${numberOfTicket} has won bingo ! Bingo at line ${i + 1}`);
        }, 100);

        return;
      } else {
        setBingo('');
      }
    }

    if (numberList.length < 1) {
      setBingo('');
    }
  }, [numberList, numberArr, numberOfTicket]);

  // 'bingo'
  return (
    <div className={`ticket-wrapper ${bingo}`}>
      <div className="ticket-header">{numberOfTicket && numberOfTicket}</div>
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

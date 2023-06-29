import { memo } from 'react';
import './Number.scss';

function Number({ number, clicked }) {
  const clickedClass = clicked === true ? 'clicked' : '';
  return <div className={`number-wrapper ${clickedClass}`}>{number}</div>;
}

export default memo(Number);

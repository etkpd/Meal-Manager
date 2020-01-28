import React from 'react';
import btncancelStyles from './CancelBtn.module.scss'

const CancelBtn = ({onClick, className}) => (
  <div 
    className={`
      ${btncancelStyles.button}
      ${className}
    `}
    onClick={onClick}
  >
    <div className={btncancelStyles.containerCross}>
      <span className={btncancelStyles.left}></span>
      <span className={btncancelStyles.right}></span>
    </div>
  </div>
);


export default CancelBtn;
import React from 'react';
//eslint-disable-next-line
import {ReactComponent as NumberedListIconSVG} from './NumberedListIcon.svg'
//eslint-disable-next-line
import {ReactComponent as NumberedListIconFirstSVG} from './NumberedListIconFirst.svg'
//eslint-disable-next-line
import {ReactComponent as NumberedListIconLastSVG} from './NumberedListIconLast.svg'
import styleOrderedList from './OrderedList.module.scss'

const OrderedList = ({
  text,
  indexOfListItem,
  isLastItem,
  isFirstItem,
}) => {

  let listBulletPointIcon = null
  if(isFirstItem){
    listBulletPointIcon = <NumberedListIconFirstSVG className={styleOrderedList.icon}/>
  } 
  else if(!isLastItem && !isFirstItem){
    listBulletPointIcon = <NumberedListIconSVG className={`${styleOrderedList.icon} ${styleOrderedList.icon__proceeding}`}/> 
  }
  else if(isLastItem){
    listBulletPointIcon = <NumberedListIconLastSVG className={`${styleOrderedList.icon} ${styleOrderedList.icon__final}`}/>
  }

  return (
    <div className={styleOrderedList.listItem}>
      <div className={styleOrderedList.bulletPointIcon}>
        {listBulletPointIcon}
        <span className={styleOrderedList.number}>{indexOfListItem+1}</span>
      </div>
      <div>
        <p>{text}</p>
      </div> 
    </div>
  );
};

export default OrderedList;
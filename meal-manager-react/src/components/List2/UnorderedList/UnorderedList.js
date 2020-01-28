import React from 'react';
import {ReactComponent as BulletIconSVG} from './BulletIcon.svg'
import styleUnorderedList from './UnorderedList.module.scss'

const UnorderedList = (props) => {
  return (
    <div className={styleUnorderedList.listItem}>
      <div className={styleUnorderedList.bulletPointIcon}>
        <BulletIconSVG className={styleUnorderedList.icon}/>
      </div>
      <span className={styleUnorderedList.entry}>
        <p>{props.ingredient}</p>
      </span>
    </div>
  );
};

export default UnorderedList;
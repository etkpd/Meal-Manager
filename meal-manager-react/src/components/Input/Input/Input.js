import React from 'react';
import {ReactComponent as BulletIconSVG} from './BulletIcon.svg'
import AlertIconWithModal from '../../Alert/AlertIconWithModal/AlertIconWithModal';
import styleInput from './Input.module.scss'

const Input = ({
  field,
  form: { touched, errors },
  name,
  onBlur,
  onKeyDown,
  placeholder,
  indexOfListItem,
}) => {


  return (
    <div className={styleInput.listItem}>
      <div className={styleInput.bulletPointIcon}>
        <BulletIconSVG className={styleInput.icon}/>
      </div>
      <span className={styleInput.entry}>
        {indexOfListItem>=0 && 
          <AlertIconWithModal
            index={indexOfListItem}
          />
        }
        <input 
          type='text' {...field} 
          className={styleInput.input}
          id={name}
          onBlur={onBlur}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
        />
      </span>
    </div>
  );
};

export default Input;
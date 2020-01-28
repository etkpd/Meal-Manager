import React from 'react';
import {ReactComponent as NumberedListIconSVG} from './NumberedListIcon.svg'
import {ReactComponent as NumberedListIconFirstSVG} from './NumberedListIconFirst.svg'
import {ReactComponent as NumberedListIconLastSVG} from './NumberedListIconLast.svg'
import styleInputText from './InputText.module.scss'

const InputText = ({
  field,
  form: { touched, errors },
  name,
  onBlur,
  onKeyDown,
  placeholder,
  indexOfListItem,
  isLastItem,
  isFirstItem,
  inputStyle
}) => {

  let listBulletPointIcon = null
  if(inputStyle === "bullet-point"){
    listBulletPointIcon = <span className={styleInputText.icon}>@</span>
  } else if(inputStyle === "numbered"){
    if(isFirstItem){
      listBulletPointIcon = <NumberedListIconFirstSVG className={styleInputText.icon}/>
    } 
    else if(!isLastItem && !isFirstItem){
      listBulletPointIcon = <NumberedListIconSVG className={`${styleInputText.icon} ${styleInputText.icon__proceeding}`}/> 
    }
    else if(isLastItem){
      listBulletPointIcon = <NumberedListIconLastSVG className={`${styleInputText.icon} ${styleInputText.icon__final}`}/>
    }
  }

  return (
    <div className={styleInputText.listItem}>
      <div className={styleInputText.bulletPointIcon}>
        {listBulletPointIcon}
      <span className={styleInputText.number}>{indexOfListItem+1}</span>
      </div>
        <textarea
          {...field}
          className={styleInputText.textarea}
          id={name}
          onBlur={onBlur}
          onKeyDown={onKeyDown} 
          placeholder={placeholder}
          rows="1"
        >
        </textarea>
    </div>
  );
};

export default InputText;
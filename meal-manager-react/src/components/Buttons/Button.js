import React from 'react';
import buttonStyles from './Button.module.scss'


const TYPES = {
  REQUEST_RECIPES: 'request_recipes',
  CONFIRM: 'confirm',
  SECONDARY: 'secondary',
  SIGNIN: 'signin',
  ADD: 'add'
}

const BaseButton = ({ type, label, onClick, buttonType, enabled=false}) => (
  <input
    type={type}
    defaultValue={label}
    onClick={onClick}
    className={`
      ${buttonStyles.myButton} 
      ${enabled === false ? buttonStyles[ buttonType ] : buttonStyles[buttonType+'_enabled']}
    `}
  />
);

export const Request_Recipes = props => (
  <BaseButton { ...props } buttonType={TYPES.REQUEST_RECIPES} />
);

export const Add = props => (
  <BaseButton { ...props } buttonType={TYPES.ADD} />
);

export const Confirm = props => (
  <BaseButton { ...props } buttonType={TYPES.CONFIRM} />
);

export const Secondary = props => (
  <BaseButton { ...props } buttonType={TYPES.SECONDARY} />
);

export const SignIn = props => (
  <BaseButton { ...props } buttonType={TYPES.SIGNIN} />
);
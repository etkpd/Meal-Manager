import React, { Component } from 'react';
import stylesItem from './Item.module.scss';


class Item extends Component {
  /* state={
    text:""
  }

  focus() {
    this.textInput.focus();
  }
  onChange = e =>{
    this.setState({ 
      text: e.target.value 
    });
  } */
  
  render() {
    const {
      index,
      focusTextInput,
      focusWasLost,
      handleIngredientTextChange,
      ingredientText
    } = this.props
    return (
      <>
        <input
          className={stylesItem.fancyInput} 
          placeholder="enter ingredient" 
          type="text" 
          name="ingredient"
          value={ingredientText}
          ref={this.props.innerRef}
          onChange={(e)=>handleIngredientTextChange(e,index)}
          onKeyUp={(e)=>focusTextInput(e,index)}
          onBlur={(e)=>focusWasLost(e,index)} 
        />
        
      </>
    );
  }
}

export default React.forwardRef((props, ref) => <Item 
  innerRef={ref} {...props}
/>);
import React, { Component } from 'react';
import Item from "./Item/Item"
import AlertIconWithModal from "./AlertIconWithModal/AlertIconWithModal"

import stylesUnorderedList from './UnorderedList.module.scss' 

class UnorderedList extends Component {
 constructor(props) {
    super(props);

    this.state = {
      arrayList: [""],
      autoFocus: true
    };

    this.inputRefs = [];
  }

  setRef = (ref) => {
    if(ref) this.inputRefs.push(ref);
  };

  componentDidUpdate(){
    if(this.state.autoFocus) {
      this.inputRefs[this.inputRefs.length-1].focus()
      this.setState({autoFocus: false})
    } 
  }

  focusTextInput = (e, index) => {
    if(e.key === "Enter"){
      if(this.inputRefs[index].value !== ""){
        if(index===this.state.arrayList.length-1){
          this.setState(state => {
            const arrayList = state.arrayList.concat("");
            return {
              arrayList, 
              autoFocus: true
            };
          });
        } else {
          this.inputRefs[index+1].focus()
        }
      }
    }
  }

  focusWasLost = (e, index) => {
    if(this.inputRefs[this.inputRefs.length-1].value !== ""){
      this.setState(state => {
        const arrayList = state.arrayList.concat("");
        return {
          arrayList,
          autoFocus: false
        };
      });
    }
    if(this.inputRefs[index].value === "" && index < this.inputRefs.length-1){
      this.setState(state => {
        const arrayList = state.arrayList.filter((item,i) => index !== i);
        return {
          arrayList,
          autoFocus:false
        };
      });
      let ThisAreInputRefs = this.inputRefs.filter((item,i)=>this.inputRefs.length-1!==i);
      this.inputRefs = ThisAreInputRefs 
    } 

   this.props.itemWasSubmitted(e.target.value, index)
  }

  handleIngredientTextChange = (e,index) => {
    const newIngridentsList = this.state.arrayList.map((ingredient, i) => {
      if(i !== index) return ingredient
      return e.target.value
    })
    this.setState({arrayList: newIngridentsList});
  }



  render() {
    return (
      <>
        <ul>
          {this.state.arrayList.map((item,index)=>{
            return (
              <div 
                key={index}
                className={stylesUnorderedList.cell}
              >
                {this.props.alertSet.has(index)?
                  <AlertIconWithModal
                    index={index}
                    alertSet={this.props.alertSet}
                  />
                  : null
                }
                <li >
                  <Item
                    index={index}
                    ref={this.setRef}
                    ingredientText={this.state.arrayList[index]}
                    handleIngredientTextChange={this.handleIngredientTextChange}
                    focusTextInput = {this.focusTextInput}
                    focusWasLost = {this.focusWasLost}
                  />
                </li>
              </div>
            )
          })}  
        </ul>
      </>
    );
  }
}

export default UnorderedList;
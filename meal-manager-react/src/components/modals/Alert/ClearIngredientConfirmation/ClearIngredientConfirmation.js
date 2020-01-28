import React from 'react';
import {connect} from "react-redux";

class IngredientConfirmationModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <>
      <h2>Clear Any Alerts</h2>
      </>
    );
  }
}

const mapStateToProps = () =>({
})

const mapDispatchToProps = (dispatch) => {
  return {
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(IngredientConfirmationModal);
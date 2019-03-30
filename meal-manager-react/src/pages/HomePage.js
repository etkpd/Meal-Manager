import React from "react";
import { Link } from "react-router-dom";
import LoginModal from "../components/modals/LoginModal/LoginModal";


class HomePage extends React.Component {
  state = {
    show: false
  }

  showModal = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  }

  render() {
    return (
      <div>
        <h1>MEAL MANAGER</h1>
      
        
        
        <input type="button"
          onClick={this.showModal}
          value="Log In / Sign Up" 
        />

        <LoginModal onClose={this.showModal} show={this.state.show}>
          Sign Up or Log In
        </LoginModal>

        <Link to="/recipes">Recipes</Link>
      </div>
    );
  }
}



export default HomePage;

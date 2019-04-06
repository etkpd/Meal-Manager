import React, { Component } from 'react';
import styles from "./test.module.scss";

class Test extends Component {
  render() {
    return (
      <div className={styles.checkboxContainer}>
        <label>
          <input type="checkbox" className={styles.filledin}  />
          <span>Filled in</span>
        </label>
      </div>
    );
  }
}

export default Test;
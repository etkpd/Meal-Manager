import React from 'react';
import styles from './FilterCategory.module.scss'

const FilterCategory = () => {
  return (
    <div className={styles.filtergroupcontainer}>
      <button><h3>this.props.title</h3></button>
    </div>
  );
};

export default FilterCategory;
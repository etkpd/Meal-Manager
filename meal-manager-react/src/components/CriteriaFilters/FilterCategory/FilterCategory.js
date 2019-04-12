import React from 'react';
import styles from './FilterCategory.module.scss'

const FilterCategory = ({title}) => {
  return (
    <div className={styles.filtergroupcontainer}>
      <button><h3>{title}</h3></button>
    </div>
  );
};

export default FilterCategory;
import React from 'react';
import styles from './FilterTitle.module.scss';

const FilterTitle = ({hiddenCategory, toggleState, title}) => {
  return (
    <div className={styles.filtergroupcontainer}>
      <button onClick={toggleState} className={(hiddenCategory)? styles.filtergroup_expanded :{}}><h4>{title}</h4></button>
    </div>
  );
};

export default FilterTitle;
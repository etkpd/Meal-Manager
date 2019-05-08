import React from 'react';
import { Link } from "react-router-dom";

const HorizontalPaginator = ({history, match, location}) => {
  return (
    <div>
         {console.log(history)}
        {console.log(match)}
        {console.log(location)} 
      <ul>
        <li><Link to={{ pathname: "/recipes", search: "?page=1" }}>1</Link></li>
        <li><Link to={{ pathname: "/recipes", search: "?page=2" }}>2</Link></li>
        <li><Link to={{ pathname: "/recipes", search: "?page=3" }}>3</Link></li>
        <li><Link to={{ pathname: "/recipes", search: "?page=4" }}>4</Link></li> 
      </ul>
    </div>
  );
};

export default HorizontalPaginator;
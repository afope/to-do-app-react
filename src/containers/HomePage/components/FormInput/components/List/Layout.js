import React from 'react';
import './List.css';


const ListLayout = ({items}) => (

  <div class="list">
  <ul>
    {
      items.map((item, index) => <li key={index}>{item}</li>)
    }
  </ul>
  </div>

);

export default ListLayout;

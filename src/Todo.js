import React from 'react';

const Todo = ({name,rating,id, onClick}) => {
const onSelectClick = (e) =>{onClick(e.target.value)}
return(
  <li>
    {name} - {rating} <br/>
  <select
     onChange={onSelectClick}
  ><option>your choice</option>
    <option>1</option>
    <option>2</option>
 </select>

  </li>

)}

export default Todo;

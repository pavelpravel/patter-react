import React from 'react';

const Header = ({}) => {

  const onChange = () => {};
  return (
  <div>
    <h2>Header</h2>
    <form>
      <input type="text" onChange={onChange} placeholder="insert" ></input>
    <input type="button"></input>

    </form>

  </div>
)};

export default Header;

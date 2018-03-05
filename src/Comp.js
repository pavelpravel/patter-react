import React from 'react';
import {connect} from 'react-redux';
import * as actions from './actions/todosActions';

const Comp = ({addTodo}) => {

  const onChangeForm = (user) =>
   {addTodo(user)};

  return (

  <div>
    <h2>Comp</h2>
  </div>
)};

const mapDispatchToProps = ({

})

export default connect(null, mapDispatchToProps)(Comp);

import React from 'react';
import {connect} from 'react-redux';
import * as actions from './actions/todosActions';
import FormUser from './forms/FormUser';

const Header = ({addTodo}) => {

  const onChangeForm = (user) =>
   {addTodo(user)};

  return (

  <div>
    <h2>Header</h2>
  <FormUser onSubmit={onChangeForm}/>
  </div>
)};

const mapDispatchToProps = ({
addTodo: actions.addTodo
})

export default connect(null, mapDispatchToProps)(Header);

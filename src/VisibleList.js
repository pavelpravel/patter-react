import React from 'react';
import {connect} from 'react-redux';
import Todo from './Todo';
import * as actions from './actions/todosActions';

const VisibleList = ({todos, rateTodo}) => {
  return (<div>
    <h2>VisibleList</h2>
    <ul>
      {
        todos.map(todo => (<Todo key={todo.id} {...todo} onClick={(rating) => {

            rateTodo(todo.id, rating)
          }}/>))
      }

    </ul>

  </div>);
}

const mapStateToProps = (state) => ({todos: state.todos})

const mapDispatchToProps = dispatch => {
  return {
    rateTodo: (id, rating) => {
      dispatch(actions.rateTodo(id, rating))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VisibleList);

import {v4} from 'node-uuid';

export const ADD_TODO = 'ADD_TODO'
export const RATE_TODO = 'RATE_TODO'

export const addTodo = (user) =>(

    {
      type: ADD_TODO,
      id: v4(),
      user
    }
  )


;

export const rateTodo = (id, rating) =>(
  {
    type: RATE_TODO,
    id,
    rating
  }
  )

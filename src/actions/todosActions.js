import {v4} from 'node-uuid';
import fetch from 'cross-fetch';


export const ADD_TODO = 'ADD_TODO'
export const RATE_TODO = 'RATE_TODO'

export const addTodo = () =>{}

export const rateTodo = (id, rating) =>(
  {
    type: RATE_TODO,
    id,
    rating
  }
);

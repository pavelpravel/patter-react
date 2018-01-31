export const ADD_TODO = 'ADD_TODO'
export const RATE_TODO = 'RATE_TODO'

export const addTodo = (stuff) =>(

    {
      type: ADD_TODO,
    stuff
    }
  )


;

export const rateTodo = (id) => (
  {type: RATE_TODO,
    id
  }
);

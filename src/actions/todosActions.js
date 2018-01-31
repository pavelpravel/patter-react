export const ADD_TODO = 'ADD_TODO'
export const RATE_TODO = 'RATE_TODO'

export const addTodo = (user) =>(

    {
      type: ADD_TODO,
    user
    }
  )


;

export const rateTodo = (id) => (
  {type: RATE_TODO,
    id
  }
);

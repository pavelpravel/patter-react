
const todos = (state = [{
  name: 'example',
  id: 0,
  rating: 0
}], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return  [
        ...state,
        {
          name: action.user.name,
          id: action.id,
          rating: 0,

        }
      ]

      case 'RATE_TODO':
      return state.map(todo =>
     (todo.id === action.id)
       ? {...todo, rating: action.rating}
       : todo
   )

    default: return state


  }

}



export default todos;

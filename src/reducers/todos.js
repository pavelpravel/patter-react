const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        name: action.user.name,
        id: action.user.id,
        rating: action.user.rating,
      }

    default:

  }
}

const todos = (state=[], action) => {
  const {user} = action;

  switch (action.type) {
    case 'ADD_TODO': return [
      ...state,
      todo(undefined, action)
    ];
    case "RATE_TODO":
      if (state.user.id !== action.id) {
        return {
          ...state
        }
      };
      return {
        ...state
      }
    default:
      return state;
  }

}

export default todos;

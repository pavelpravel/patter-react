const todos = (state={}, action) => {
  switch (action.type) {
    ADD_TODO: return {
      ...state,
      stuff: action.stuff
    }
    RATE_TODO:{
      ...state,

    }
    default:
      return state;
  }

}

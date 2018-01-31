import {ADD_TODO, RATE_TODO} from '../actions/todosActions';
import todos  from './todos';


describe('reducer should work', ()=> (
  it('add todo', () =>
    {
      const state = {};
      const action ={
        type: ADD_TODO,
        user: {
          name: 'Pasha',
          id: 2,
          rating: 0
        }
      };
      const add = todos(state,action);

      expect(add).toEqual(
          {
            user: {
              name: 'Pasha',
              id: 2,
              rating: 0,
            }
          }
        );
    }
  )
));

test('rate todo', () =>
  {
    const state = {
      user: {
        name: 'Pasha',
        id: 2,
        rating: 0,
      }
    };
    const action ={
      type: RATE_TODO,
      id: 2,
      rating: 3,
    };
    const add = todos(state,action);

    expect(add).toEqual(
        {
          user: {
            name: 'Pasha',
            id: 2,
            rating: 3
          }
        }
      );
  }
)


import * as actions  from './todosActions';


describe('should work', ()=> (
  it('add todo', () =>
    {
      const numbers = {
        user: {
          name: 'Pasha',
          id: 2,
        }

      };
      const add = actions.addTodo(numbers);

      expect(add).toEqual(
        {
          type: actions.ADD_TODO,
          user:  {
            name: 'Pasha',
            id: 2,
          }
        }
        );
    }
  )

))

test('rate todo', () =>
  {
    const id = 2;
    const add = actions.rateTodo(id);

    expect(add).toEqual(
      {
        type: actions.RATE_TODO,
        id: 2
      }
      );
  }
)


import * as actions  from './todosActions';


describe('should work', ()=> (
  it('add todo', () =>
    {
      const numbers = [2, 3];
      const add = actions.addTodo(numbers);

      expect(add).toEqual(
        {
          type: actions.ADD_TODO,
          stuff: [2, 3]
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

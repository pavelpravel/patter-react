import {v4} from 'node-uuid';
import * as actions  from './todosActions';


describe('should work', ()=> (
  it('add todo action', () =>
      {
      const user = {
          name: 'Pasha',
      };
      const add = actions.addTodo(user);

      expect(add.type).toEqual(
        "ADD_TODO"
        );
      expect(add.user).toEqual(
        {name: 'Pasha'}
      )
    }
  )

))

test('rate todo action', () =>
  {
    const id = 2;
    const add = actions.rateTodo(id);

    expect(add.type).toEqual(
        "RATE_TODO"
      );
  }
)

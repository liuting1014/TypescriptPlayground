import * as React from 'react';
import { observer } from 'mobx-react';
import { TodoStore } from './TodoStore';

type TodoListProps = {
  store: TodoStore
};

@observer
export default class TodoList extends React.Component <TodoListProps> {
  addTodo = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.which === 13) {
      const inputField: HTMLInputElement = e.target as any;
      this.props.store.createTodo(inputField.value);
      inputField.value = '';
    }
  }

  render() {
    return (
      <div>
        <h1>My Todo List</h1>
        <pre>
          {JSON.stringify(this.props.store.todos, null, 2)}
        </pre>
        <input
          type="text"
          placeholder="What needs to be done?"
          onKeyPress={this.addTodo}
        />
      </div>
    );
  }
}
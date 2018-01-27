import * as React from 'react';
import { observer } from 'mobx-react';
import { Todo, TodoStore } from './TodoStore';

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
    const todoItem = this.props.store.todos.map((todo: Todo) => (
      <li key={todo.id}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => {todo.completed = !todo.completed; }}
        />
        {todo.value}
      </li>
    ));
    return (
      <div>
        <h1>My Todo List</h1>
        <input
          type="text"
          placeholder="What needs to be done?"
          onKeyPress={this.addTodo}
        />
        <ul>
          {todoItem}
        </ul>
        <button onClick={this.props.store.clearCompleted}>Clear completed</button>
      </div>
    );
  }
}
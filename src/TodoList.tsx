import * as React from 'react';
import { observer } from 'mobx-react';
import { TodoStore } from './TodoStore';

@observer
export default class TodoList extends React.Component <{store: TodoStore }> {
  addTodo = (e) => {
    if (e.which === 13) {
      this.props.store.createTodo(e.target.value);
      e.target.value = '';
    }
  };

  render() {
    return(
      <div>
        <h1>My Todo List</h1>
        <input type="text" placeholder="What needs to be done?" onKeyPress={this.addTodo}/>
      </div>
    )
  }
}
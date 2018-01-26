import * as React from 'react';
import './App.css';
import TodoList from './TodoList';
import { TodoStore } from './TodoStore';

class App extends React.Component<{todoStore: TodoStore}> {
  render() {
    return (
      <div>
        <TodoList store={this.props.todoStore}/>
      </div>
    );
  }
}

export default App;

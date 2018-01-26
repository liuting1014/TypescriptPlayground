import * as React from 'react';
import './App.css';
import TodoList from './TodoList';
import { TodoStore } from './TodoStore';

class App extends React.Component {
  render() {
    return (
      <div>
        <TodoList store = {TodoStore} />
      </div>
    );
  }
}

export default App;

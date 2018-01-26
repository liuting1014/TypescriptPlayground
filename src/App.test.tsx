import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { TodoStore } from './TodoStore';

it('renders without crashing', () => {
  const todoStore = new TodoStore();
  const div = document.createElement('div');
  ReactDOM.render(<App todoStore={todoStore}/>, div);
});

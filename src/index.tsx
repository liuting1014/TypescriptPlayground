import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { TodoStore } from './TodoStore';

const todoStore = new TodoStore();

ReactDOM.render(
  <App todoStore={todoStore}/>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

import { observable } from 'mobx'

class Todo {
  @observable value: string;
  @observable completed: boolean;

  constructor(value: string) {
    this.value = value;
    this.completed = false;
  }
}

export class TodoStore {
  @observable todos: {value: string, completed: boolean}[] = [];

  createTodo (value: string): void {
    this.todos.push(new Todo(value));
  }

  clearCompleted = () => {
    this.todos = this.todos.filter(todo => !todo.completed);
  }
}


import { observable } from 'mobx';

export class Todo {
  @observable value: string;
  @observable completed: boolean;
  @observable id: number;

  constructor(value: string) {
    this.value = value;
    this.completed = false;
    this.id = Date.now();
  }
}

export class TodoStore {
  @observable todos: Todo[] = [];

  createTodo (value: string): void {
    this.todos.push(new Todo(value));
  }
  deleteTodo (index: number): void {
    this.todos.splice(index, 1);
  }
  clearCompleted = () => {
    this.todos = this.todos.filter(todo => !todo.completed);
  }
}

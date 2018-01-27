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

  moveUp (index: number): void {
    if (index !== 0) {
      const currentItem = this.todos[index];
      const previousItem = this.todos[index - 1];
      this.todos[index - 1] = currentItem;
      this.todos[index] = previousItem;
    }
  }

  moveDown (index: number): void {
    if (index !== this.todos.length - 1) {
      const currentItem = this.todos[index];
      const nextItem = this.todos[index + 1];
      this.todos[index + 1] = currentItem;
      this.todos[index] = nextItem;
    }
  }

  clearCompleted = () => {
    this.todos = this.todos.filter(todo => !todo.completed);
  }
}

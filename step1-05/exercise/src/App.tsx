import React from 'react';
import { TodoHeader } from './components/TodoHeader';
import { TodoList } from './components/TodoList';
import { TodoFooter } from './components/Todofooter';

export class TodoApp extends React.Component<any, any> {
  render() {
    return (
      <div>
        <TodoHeader />
        <TodoList />
        <TodoFooter />
      </div>
    );
  }
}

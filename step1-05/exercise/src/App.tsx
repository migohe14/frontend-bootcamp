import React from 'react';
import { TodoHeader } from './components/TodoHeader';
import { TodoListItem } from './components/TodoListItem';
import { TodoFooter } from './components/Todofooter';

export class TodoApp extends React.Component<any, any> {
  render() {
    var arr = [1, 2, 3, 4]
    return (
      <div>
        <TodoHeader />
        {/* <ul>
          <TodoListItem />
          <TodoListItem />
          <TodoListItem />
          <TodoListItem />
        </ul> */}
        <ul>
            {arr.map((item, index) => {
                return <TodoListItem key={index} />;
            })}
        </ul>
        <TodoFooter />
      </div>
    );
  }
}

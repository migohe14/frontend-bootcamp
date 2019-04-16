import React from 'react';
import { TodoListItem } from './TodoListItem';


export class TodoList extends React.Component<any, any> {
  render() {
    var arr = [1, 2, 3, 4]
    return (
        <div>
            <ul>
                {arr.map((item, index) => {
                    return <TodoListItem key={index} />;
                })}
            </ul>
        </div>
    );
  }
}

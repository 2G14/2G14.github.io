import * as React from 'react';

interface TodoProps {
  completed: boolean;
  text: string;
  onClick: () => void;
}

class Todo extends React.Component<TodoProps, {}> {
  render() {
    const { completed, text, onClick } = this.props;
    return (
      <li
        onClick={onClick}
        style={ {textDecoration: completed ? 'line-through' : 'node'} }
      >
        {text}
      </li>
    );
  }
}

export default Todo;

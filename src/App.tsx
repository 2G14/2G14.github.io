import * as React from 'react';
// containerディレクトリ内のファイルをロードしているしていることに注意。
import TodoList from "./containers/TodoList";
import AddTodoButton from "./containers/AddTodoButton";

function app(): JSX.Element {
  return (
    <div>
      <AddTodoButton />
      <TodoList />
    </div>
  )
}

export default app;

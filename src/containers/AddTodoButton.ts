import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { addTodo, TodoAction } from '../actions';
import AddButton, { AddTodoButtonProps } from '../components/AddTodoButton';
import { Todos } from '../states/TodoState';

function mapStateToProps(state: Todos): {} {
  return {}
}

function mapDispatchToProps(dispatch: Dispatch<TodoAction>): AddTodoButtonProps {
  return {
    onSubmit: (s: string) => {
      dispatch(addTodo(s));
    }
  };
}

export default connect<{}, AddTodoButtonProps, {}>(
  mapStateToProps,
  mapDispatchToProps
)(AddButton);

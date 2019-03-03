import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, Store } from 'redux';
import todos from './reducers/todos';
import { Todos } from './states/TodoState'

import App from './App';

// todos: (s: TodoState, a: Action) => TodoState
let store: Store<Todos> = createStore(todos, []);

// @@redux/INIT
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);

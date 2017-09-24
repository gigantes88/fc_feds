import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './Reducers';

// import * as actions from './Actions';

const store = createStore(reducers);

// console.log(store.getState())
// const unsubscribe = store.subscribe(() => console.log(store.getState()));
// store.dispatch(actions.increment());
// store.dispatch(actions.increment());
// store.dispatch(actions.decrement());
// store.dispatch(actions.setColor([200, 200, 200]));
// unsubscribe();
// store.dispatch(actions.setColor([150, 150, 150]));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

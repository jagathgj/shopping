import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import cartReducers from './components/reducers/cartReducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(cartReducers,(window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
(window as any).__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root')
);
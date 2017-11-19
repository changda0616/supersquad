import React from 'react';
import ReactDom from "react-dom";
import App from './component/app';

import { createStore } from "redux";
import { Provider } from 'react-redux';

import rootReducer from "./reducers/index";
const store = createStore(rootReducer);

console.log('store.getstate()', store.getState())

store.subscribe(()=>console.log('store',store.getState()))

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,document.getElementById('root'));
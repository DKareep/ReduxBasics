import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';

import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import Counter from './store/reducers/counter';
import Result from './store/reducers/results';
import registerServiceWorker from './registerServiceWorker';
const rootReducer = combineReducers({
    ctr: Counter,
    res:  Result
 })
const store = createStore(rootReducer)
ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, document.getElementById('root'));
registerServiceWorker();

//Store!
/* eslint-disable no-underscore-dangle */
import {createStore} from 'redux';
// applyMiddleware
// import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers/root-reducer';
/* eslint-enable */
let store = createStore(reducer);
// composeWithDevTools(applyMiddleware(...middleware))


export default store;
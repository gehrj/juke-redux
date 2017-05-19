//Store!
/* eslint-disable no-underscore-dangle */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import loggerMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import lyricsReducer from './reducers/lyrics-reducer';
import playerReducer from './reducers/player-reducer';

// applyMiddleware
// import { composeWithDevTools } from 'redux-devtools-extension';

/* eslint-enable */
// let middleware = applyMiddleware(loggerMiddleware)
let store = createStore(
  combineReducers({
    lyrics: lyricsReducer,
    player: playerReducer
  }),
  applyMiddleware(loggerMiddleware, thunkMiddleware));
// composeWithDevTools(applyMiddleware(...middleware))


export default store;

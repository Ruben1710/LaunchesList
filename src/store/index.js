import createSagaMiddleware from "redux-saga";
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { rootWatcher } from '../saga';
import launchesReducer from './launchesReducer';
import fullLaunchesReducer from './fullLaunchesReducer'



const rootReducer = combineReducers({
    launchesReducer, fullLaunchesReducer
})

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootWatcher)


import { createStore, applyMiddleware } from 'redux';
import modules from './modules';
import ReduxThunk from 'redux-thunk';

const Store = createStore(modules, applyMiddleware(ReduxThunk))

export default Store;
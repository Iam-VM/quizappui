import {createStore} from 'redux';
import userStateReducer from './reducer';


const store = createStore(userStateReducer);

export default store;
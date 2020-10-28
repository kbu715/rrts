import { combineReducers } from 'redux';
import { Todo } from '../action';
import todosReducer from './todos';

export interface StoreState {
    todos: Todo[]
}

const rootReducer = combineReducers<StoreState>({
    todos: todosReducer,
})

export default rootReducer;
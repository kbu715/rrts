import { FetchTodosAction, Todo } from '../action';
import { ActionTypes } from '../action/types';

const todosReducer = (state:Todo[]=[], action:FetchTodosAction) => {
    switch(action.type){
        case ActionTypes.fetchTodos :
            return action.payload;
        default :
            return state;
    }
}

export default todosReducer;
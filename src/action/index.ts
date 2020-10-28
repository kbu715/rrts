import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

export interface Todo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

export interface FetchTodosAction {
    type: ActionTypes.fetchTodos,
    payload:Todo[]
}

export const fetchToDos = () => {
    return async (dispatch:Dispatch<FetchTodosAction>) => {
        const response = await axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');

        dispatch({
            type: ActionTypes.fetchTodos,
            payload: response.data
        })
    }
}
import axios from 'axios';
import { Dispatch } from 'redux';

export interface IResponse {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}
export const fetchToDos = async () => {
    const response = await axios.get<IResponse[]>('https://jsonplaceholder.typicode.com/todos');
    return async (dispatch:Dispatch) => {
        
        dispatch({
            type: fetchToDos,
            payload: response.data
        })
    }
}

export default fetchToDos;
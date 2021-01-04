import React from 'react';
import './TodoItem.css';
import { Todo } from '../modules/todos';
import useTodoActions from '../hooks/useTodoActions';

type TodoItemProps ={
    todo: Todo;
}

const TodoItem = ({todo}:TodoItemProps) => {

    const {onRemove, onToggle} = useTodoActions(todo.id);
    const arr = [];
    for(let i=0 ; i<todo.importance ; i++){
        arr.push(null)
    }

    return (
        <li className={`TodoItem ${todo.done ? 'done' : ''}`}>
            <span className="text" onClick={onToggle}>{`📑${todo.text}`}</span>
            <span className="importance">
                {arr.map((i, idx)=><i className="fas fa-star" key={idx}></i>)}
            </span>
            <span className="remove" onClick={onRemove}>❌</span>
        </li>
    )
}

export default TodoItem;
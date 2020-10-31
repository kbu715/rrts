import React from 'react';
import TodoItem from './TodoItem';
import useTodos from '../hooks/useTodos';

const TodoList = () => {

    const todos = useTodos(); // 커스텀 hook useTodos 사용

    if(todos.length === 0) return <p>할일이 없니?!</p>

    return (
        <ul>
            {todos.map(todo => (
                <TodoItem todo={todo} key={todo.id} />
            ))}
        </ul>
    )
}

export default TodoList;
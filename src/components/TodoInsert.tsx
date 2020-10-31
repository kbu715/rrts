import React, { useState } from 'react'
import useAddTodo from '../hooks/useAddTodo';

const TodoInsert = () => {
    const [text, setText] = useState("");

    const addTodo = useAddTodo();

    const onChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    }

    const onSubmit = (event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        addTodo(text);
        setText("");
    }
    return (
        <form onSubmit={onSubmit}>
            <input value={text} onChange={onChange} placeholder="할 일을 적어" />
            <button type="submit">ADD</button>
        </form>
    )
}
export default TodoInsert;
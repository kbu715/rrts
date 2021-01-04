import React, { useState } from 'react'
import useAddTodo from '../hooks/useAddTodo';
import './TodoInsert.css';

const TodoInsert = () => {
    const [text, setText] = useState("");
    const [importance, setImportance] = useState(0);

    const addTodo = useAddTodo();

    const onChangeText = (event:React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    }
    const onChangeImportance = (event:React.ChangeEvent<HTMLInputElement>) => {
        if(Number(event.target.value) < 0) {
            console.log('음수 안됨')
            return;
        }
        setImportance(Number(event.target.value));
    }
    const onSubmit = (event:React.FormEvent<HTMLFormElement>)=>{
        if(!text || !importance){
            alert('할일이 없니???')
            return;
        }
        event.preventDefault();
        addTodo(text, importance);
        setText("");
        setImportance(0)
    }
    return (
        <form onSubmit={onSubmit} className="form">
            <label htmlFor="text">할일</label>
            <input name="text" className="input" value={text} onChange={onChangeText} />
            <label htmlFor="importance">중요도</label>
            <input name="importance" className="input" type="number" value={importance} onChange={onChangeImportance} />
            <button className="btn" type="submit">ADD</button>
        </form>
    )
}
export default TodoInsert;
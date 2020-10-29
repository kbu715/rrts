import React, { useState } from 'react'

interface INewNote {
    addNote: (note:string) => void;
}

export const NewNote :React.FunctionComponent<INewNote> = ({addNote}) => {

    const [note, setNote] = useState("");
    const onChangeHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
        setNote(event.target.value);
    }

    const onClickHandler = () => {
        addNote(note);
        setNote("");
    }

    return (
        <div>
            <input value={note} onChange={onChangeHandler} />
            <button onClick={onClickHandler}>add</button>
        </div>
    )
}

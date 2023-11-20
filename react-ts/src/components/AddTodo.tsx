import { useState } from "react"

import { Todo } from '../types';

type AddTodoProps = {
    onChange: (todo: Todo) => void;
}

export function AddTodo({ onChange }: AddTodoProps){

    const [text, setText] = useState<string>('');

    function handleNewTodo() {
        onChange({
            checked: false,
            text: text
        })
        setText('')
    }

    return (
    <footer>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={() => handleNewTodo()}>Add todo</button>
    </footer>
    )
}
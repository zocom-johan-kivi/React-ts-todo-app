import type { Todo } from "../types"

type TodoItemProps = {
    todo: Todo
}

export function TodoItem({ todo }: TodoItemProps){
    return (<li>
        <input type="checkbox" defaultChecked={todo.checked}  />
        <span className="text">{todo.text}</span>
    </li>)
}
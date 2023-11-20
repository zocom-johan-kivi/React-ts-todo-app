import { useState } from 'react';
import { TodoItem } from './components/Todo';
import { AddTodo } from './components/AddTodo';

import type { Todo } from './types';

function App() {

  // TodoList
  const [todos, setTodos] = useState<Todo[]>([]);

  function handleNewTodo(todo: Todo){
    setTodos([...todos, todo])
  }

  return (
    <main className='todo-app'>
      <ul className="todos">
        {todos.map((todo, index) => 
          <TodoItem todo={todo} key={index} />
        )}
      </ul>

      <AddTodo onChange={(todo) => handleNewTodo(todo)} />
    </main>
  )
}

export default App

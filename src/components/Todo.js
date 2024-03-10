import React from 'react'
import { useSelector } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'
import { useDispatch } from 'react-redux'
function Todo() {
  const todos = useSelector(state =>state.todos)
  const dispatch = useDispatch()
  const handleDeleteTodo = (todo) =>{
    
     dispatch(removeTodo(todo.id))
   
  }
  return (
    <>
    <div>Todos</div>
    <ul>
        {todos.map((todo ) => (
          <li key={todo.id} className="flex items-center justify-center mb-2">
            <span className='text-green-500 px-5 '>{todo.text}</span>
            <button
              className=" bg-red-500 text-white  font-bold py-2 px-4 ml-2 hover:text-red-700  rounded focus:outline-none focus:shadow-outline  "
              onClick={() => handleDeleteTodo(todo)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todo

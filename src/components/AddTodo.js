import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import {addTodo} from '../features/todo/todoSlice'

function AddTodo() {
  const [input,setInput] = useState('')
  const dispatch =useDispatch();

  const addTodoHandler = (e) =>{
    e.preventDefault()

    dispatch(addTodo(input))
    setInput('')
  }
 
    return (
        <div className="max-w-md mx-auto mt-8">
        <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
        <form onSubmit={addTodoHandler} className="mb-4">
          <div className="flex">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Add a new to-do"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-2 rounded focus:outline-none focus:shadow-outline"
            >
              Add Todo
            </button>

           
          </div>
        </form>
        </div>
  )
}

export default AddTodo

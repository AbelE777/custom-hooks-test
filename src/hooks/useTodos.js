import {useState} from 'react'

const useTodos = (initialTodos) => {
  const [todos, setTodos] = useState(initialTodos)
  
  const deleteTodo = (todoId)=> {
    const newTodos = todos.filter(todo => todo.id !== todoId)
    setTodos(newTodos)
  }

  const addTodo = (newTodo)=> {
    newTodo.id = Date.now()
    setTodos([
      ...todos, 
      newTodo
    ])
  }

  return [
    todos, 
    addTodo, 
    deleteTodo
  ]
}

export default useTodos
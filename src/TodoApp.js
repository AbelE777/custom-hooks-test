import useTodos from "./hooks/useTodos"

const initialTodos = [
  {id:1, title: 'learn react'},
  {id:2, title: 'learn node'}
]

const TodoApp = () => {
  
  const [todos, addTodo, deleteTodo] = useTodos(initialTodos)

  return (
    <div>
      <button onClick={()=>addTodo({title:'nueva tarea'})}>Add</button>
      <ul>
        {todos.map((todo) => (

          <li key={todo.id}>
            {todo.title} 
            <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoApp
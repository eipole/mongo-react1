import React from "react"
import { deleteTodo, toggleTodo } from "./functions"

async function handleDelete(id, array, func) {
  await deleteTodo(id)
  const removed = array.filter((elem) => elem._id !== id)
  func(removed)
}
async function handleToggle(id, completed, allTodos, setAllTodos) {
  const response = await toggleTodo(id, completed)
  const newtodos = allTodos.map((elem) =>
    elem._id === response._id ? { ...elem, completed: !elem.completed } : elem
  )
  setAllTodos(newtodos)
}

/* async function handleToggle(id, completed, allTodos, setAllTodos) {
  const response = await toggleTodo(id, completed)
  const newtodos = allTodos.filter((elem, i) => elem._id !== response._id)
  setAllTodos([...newtodos, response])
} */

const TodoItem = ({ name, completed, id, date, allTodos, setAllTodos }) => (
  <li>
    <span onClick={() => handleToggle(id, completed, allTodos, setAllTodos)}>
      <h2 className={`${completed && "strike"}`}>{name}</h2>
    </span>
    <p>Added on {date} </p>
    <button onClick={() => handleDelete(id, allTodos, setAllTodos)}>
      Delete
    </button>
  </li>
)

export default TodoItem

import React from "react"
import { deleteTodo, toggleTodo } from "./functions"

async function handleDelete(id, array, func) {
  await deleteTodo(id)
  const removed = array.filter((elem) => elem._id !== id)
  func(removed)
}
async function handleToggle(id, completed) {
  const response = await toggleTodo(id)
  console.log(response)
}

const TodoItem = ({ name, completed, id, date, allTodos, setAllTodos }) => (
  <li>
    <span onClick={() => handleToggle(id, completed)}>
      <h2 className={`${completed && "strike"}`}>{name}</h2>
    </span>
    <p>Added on {date} </p>
    <button onClick={() => handleDelete(id, allTodos, setAllTodos)}>
      Delete
    </button>
  </li>
)

export default TodoItem

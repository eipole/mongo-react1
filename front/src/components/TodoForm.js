import React, { useRef, useState } from "react"
import { postData } from "./functions"

function TodoForm({ setAllTodos }) {
  const [inputValue, setInputValue] = useState("")
  const inputRef = useRef()

  async function addTodoState(value) {
    const uustudu = await postData(value)
    setAllTodos((prev) => [...prev, uustudu])
  }

  function handleSubmit(event) {
    event.preventDefault()
    addTodoState(inputValue)
    setInputValue("")
    // inputRef.current.value = ""
    // handleClear()
  }

  // const handleClear = () => (inputRef.current.value = "")
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          placeholder="Write todo"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          ref={inputRef}
        />
      </label>
      <button>Submit</button>
    </form>
  )
}
export default TodoForm

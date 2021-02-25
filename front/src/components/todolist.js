import React, { useEffect, useState } from "react"
import TodoForm from "./TodoForm"
import TodoItem from "./TodoItem"
import { fetchData } from "./functions"

function TodoList() {
  const [allTodos, setAllTodos] = useState([])
  useEffect(() => {
    fetchData(setAllTodos)
  }, [])

  return (
    <div>
      <TodoForm setAllTodos={setAllTodos} />
      <ul>
        {allTodos.map(({ _id, name, completed, addedDate }) => (
          <TodoItem
            key={_id}
            name={name}
            completed={completed}
            date={addedDate}
            id={_id}
            allTodos={allTodos}
            setAllTodos={setAllTodos}
          />
        ))}
      </ul>
    </div>
  )
}

export default TodoList

/*      .then(resp =>  if(!response.ok){
          if(response.status >= 400 && response.status < 500){
              return response.json().then(data=>{
                  const err ={errorMessage: data.message}
                  throw err
              })
          }
      }) */

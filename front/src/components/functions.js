const URLEN = "http://localhost:3000/todos/"

export async function fetchData(func) {
  try {
    const response = await fetch(URLEN)
    const todos = await response.json()
    func(todos)
  } catch (error) {
    console.log(error)
  }
}

export async function postData(item) {
  try {
    const response = await fetch(URLEN, {
      method: "post",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify({ name: item })
    })

    return response.json()
  } catch (error) {
    console.log(error)
  }
}

export async function deleteTodo(id) {
  try {
    const response = await fetch(URLEN + id, {
      method: "delete"
    })
    return response.json()
  } catch (error) {
    console.log(error)
  }
}

export async function toggleTodo(id, completed) {
  try {
    const response = await fetch(URLEN + id, {
      // mode: "cors",
      method: "patch",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      // options
      body: JSON.stringify({ completed: completed })
    })

    return response.json()
  } catch (error) {
    console.log(error)
  }
}

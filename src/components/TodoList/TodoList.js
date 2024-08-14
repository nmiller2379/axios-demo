import React, { useEffect, useState } from "react";
import "./TodoList.css";
import axios from "axios";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios
      // Fetching data from the API. It will return a promise.
      .get("https://dummyjson.com/todos?limit=5")
      //   When that promise is resolved, the then method is called with the response data, allowing you to handle the successful retrieval of data.
      .then((response) => {
        //   Set the state of the todos array with the data from the API. This is considered a side effect. It is common to use the useEffect hook to handle side effects in functional components. It is also common to set the state of the component with the data from the API.
        setTodos(response.data.todos);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? "done" : ""}>
            {todo.todo}
          </li>
        ))}
      </ul>
    </div>
  );
}

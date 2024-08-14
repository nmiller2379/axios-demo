import React, { useEffect, useState } from "react";
import "./TodoList.css";
import axios from "axios";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/todos?limit=5")
      .then((response) => {
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

import React, { useState } from "react";

export default function Reducer() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const submitHandle = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("")
  };
  return (
    <>
      <h1>useReducer()</h1>
      <form onSubmit={submitHandle}>
        <input
          type={"text"}
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        ></input>
        <button disabled={!todo} type="submit">Ekle</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </>
  );
}

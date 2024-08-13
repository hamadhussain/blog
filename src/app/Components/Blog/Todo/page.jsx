"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos) {
      setTodos(savedTodos);
    }
  }, []);
  console.log(localStorage.getItem("todos"));
  const addTodo = () => {
    if (todo.trim() !== "") {
      const newTodos = [...todos, todo];
      setTodos(newTodos);
      localStorage.setItem("todos", JSON.stringify(newTodos));
    }
  };

  const handleDelete = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };
  return (
    <>
      <div className=" flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 class="text-3xl font-bold mb-4">Todo App</h1>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Enter a new todo"
          className="border border-gray-300 rounded-md px-4 py-2 mb-4 w-64"
        />
        <button
          onClick={addTodo}
          className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4 hover:bg-blue-600"
        >
          Add Todo
        </button>

        <ul className="w-64">
          {todos.map((todo, index) => (
            <li
              key={index}
              className="flex justify-between items-center border-b border-gray-300 py-2"
            >
              <span>{todo}</span>
              <button
                onClick={() => handleDelete(index)}
                className="text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
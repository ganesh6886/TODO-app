import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("todos")) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    setTodos((current) => [
      ...current,
      { id: Date.now(), text: text.trim(), completed: false }
    ]);
  };

  const toggleTodo = (id) => {
    setTodos((current) =>
      current.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((current) => current.filter((todo) => todo.id !== id));
  };

  const completed = todos.filter((todo) => todo.completed).length;
  const pending = todos.length - completed;

  return (
    <main className="app">
      <section className="todo-container">
        <div className="heading-icon">✓</div>
        <h1>My TODO List</h1>
        <p className="subtitle">Organize your day, one task at a time.</p>

        <TodoForm addTodo={addTodo} />

        <div className="stats" aria-label="Task summary">
          <div className="stat-card">
            <strong>{todos.length}</strong>
            <span>Total</span>
          </div>
          <div className="stat-card">
            <strong>{completed}</strong>
            <span>Completed</span>
          </div>
          <div className="stat-card">
            <strong>{pending}</strong>
            <span>Pending</span>
          </div>
        </div>

        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
        <p className="footer-note">Your tasks are saved in this browser.</p>
      </section>
    </main>
  );
}

export default App;

import { useState } from "react";
import CreateTodo from "./component/CreateTodo";
import ReadTodos from "./component/ReadTodos";
import UpdateTodo from "./component/UpdateTodo";
// import DeleteTodo from "./component/DeleteTodo";
import "../src/App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState(null);

  // Create a new todo
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
    };
    setTodos([...todos, newTodo]);
  };

  // Delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Update a todo
  const updateTodo = (id, updatedText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: updatedText } : todo
      )
    );
    setSelectedTodo(null);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <CreateTodo addTodo={addTodo} />
      <ReadTodos todos={todos} deleteTodo={deleteTodo} />
      {selectedTodo && (
        <UpdateTodo todo={selectedTodo} updateTodo={updateTodo} />
      )}
      {/* <DeleteTodo deleteTodo={() => setSelectedTodo(null)} /> */}
    </div>
  );
}

export default App;

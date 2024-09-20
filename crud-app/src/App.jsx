import { useState } from "react";
import CreateTodo from "./component/CreateTodo";
import ReadTodos from "./component/ReadTodos";
import UpdateTodo from "./component/UpdateTodo";
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
    // If the deleted todo was selected for update, reset selectedTodo
    if (selectedTodo && selectedTodo.id === id) {
      setSelectedTodo(null);
    }
  };

  // Update a todo
  const updateTodo = (id, updatedText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: updatedText } : todo
      )
    );
    setSelectedTodo(null); // Reset after update
  };

  return (
    <div className="bg-sky-400 min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-white mb-4">Todo List</h1>
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <CreateTodo addTodo={addTodo} />
        <ReadTodos
          todos={todos}
          deleteTodo={deleteTodo}
          setSelectedTodo={setSelectedTodo} // Set selected todo when clicking on it
        />
        {selectedTodo && (
          <UpdateTodo todo={selectedTodo} updateTodo={updateTodo} />
        )}
      </div>
    </div>
  );
}

export default App;

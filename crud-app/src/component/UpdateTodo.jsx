import { useState } from "react";

function UpdateTodo({ todo, updateTodo }) {
  const [newText, setNewText] = useState(todo.text);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTodo(todo.id, newText); // Update the todo with new text
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newText}
        onChange={(e) => setNewText(e.target.value)}
        className="border p-2 rounded w-full my-2"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-2 py-1 rounded"
      >
        Update Todo
      </button>
    </form>
  );
}

export default UpdateTodo;

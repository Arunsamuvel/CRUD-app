import React, { useState } from "react";
import DeleteTodo from "./DeleteTodo";

function UpdateTodo({ todo, updateTodo }) {
  const [updatedText, setUpdatedText] = useState(todo.text);

  const handleInputChange = (e) => {
    setUpdatedText(e.target.value);
  };

  const handleUpdateTodo = () => {
    if (updatedText.trim() === "") return;
    updateTodo(todo.id, updatedText);
  };

  return (
    <div>
      <input type="text" value={updatedText} onChange={handleInputChange} />
      <button onClick={handleUpdateTodo}>Update</button>
      <DeleteTodo deleteTodo={() => setSelectedTodo(null)} />
    </div>
  );
}

export default UpdateTodo;

import { useState } from "react";

function CreateTodo({ addTodo }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      addTodo(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="w-72"
        label="Input Blue"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default CreateTodo;

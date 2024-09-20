import React from "react";

function DeleteTodo({ deleteTodo }) {
  return (
    <div>
      <button onClick={deleteTodo}>Delete</button>
    </div>
  );
}

export default DeleteTodo;

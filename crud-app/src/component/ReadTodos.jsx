function ReadTodos({ todos, deleteTodo, setSelectedTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} className="flex justify-between items-center my-2">
          <span
            className="cursor-pointer"
            onClick={() => setSelectedTodo(todo)} // Select todo for updating
          >
            {todo.text}
          </span>
          <button
            onClick={() => deleteTodo(todo.id)}
            className="bg-red-500 text-white px-2 py-1 rounded ml-4"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ReadTodos;

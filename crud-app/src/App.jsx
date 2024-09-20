import "./App.css";
import CreateTodo from "./component/CreateTodo";
import ReadTodos from "./component/ReadTodos";

function App() {
  return (
    <>
      <div>
        <CreateTodo />
        <ReadTodos />
      </div>
    </>
  );
}

export default App;

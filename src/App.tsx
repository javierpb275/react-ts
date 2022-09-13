import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const todos = [new Todo("make your bed"), new Todo("brush your teeth")];
  return (
    <div>
      <Todos items={todos} />
    </div>
  );
}

export default App;

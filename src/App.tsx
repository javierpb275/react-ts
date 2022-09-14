import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const todos = [new Todo("make your bed"), new Todo("brush your teeth")];
  const addTodoHandler = (text: string) => {}
  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler}/>
      <Todos items={todos} />
    </div>
  );
}

export default App;

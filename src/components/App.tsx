import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import Filters from "./Filters";
import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <AddTodoForm />
      <TodoList />
      <Filters />
    </div>
  );
};

export default App;

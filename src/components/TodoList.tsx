import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { RootState } from "./../reducers/.";
import { FiltersEnum } from "./../reducers/filtersSlice";

const TodoList = () => {
  const todos = useSelector((state: RootState) => state.todos);
  const activeFilter = useSelector((state: RootState) => state.filter);

  let filteredTodos;

  switch (activeFilter as FiltersEnum) {
    case FiltersEnum.All:
      filteredTodos = todos;
      break;
    case FiltersEnum.Completed:
      filteredTodos = todos.filter((todo) => todo.completed);
      break;
    case FiltersEnum.NonCompleted:
      filteredTodos = todos.filter((todo) => !todo.completed);
      break;
    default:
      throw new Error("Unknown filter: " + activeFilter);
  }

  return (
    <div>
      <ul>
        {filteredTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

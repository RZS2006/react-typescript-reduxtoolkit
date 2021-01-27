import { useDispatch } from "react-redux";
import {
  toggleTodo,
  deleteTodo,
  TodoItemInterface
} from "../reducers/todosSlice";

const TodoItem = ({ todo }: { todo: TodoItemInterface }) => {
  const { description, completed, id } = todo;
  const dispatch = useDispatch();

  return (
    <li
      style={{ color: completed ? "green" : "black" }}
      onClick={() => dispatch(toggleTodo({ id }))}
    >
      <input readOnly type="checkbox" checked={completed} />
      <span>{description}</span>
      <button
        onClick={(e) => {
          e.stopPropagation();
          dispatch(deleteTodo({ id }));
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
